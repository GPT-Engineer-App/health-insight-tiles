import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="header" w="full" py={4} px={8} justifyContent="space-between" alignItems="center" position="sticky" top={0} bg="transparent" _after={{ transition: "background-color 0.5s", bg: "white" }}>
        <IconButton icon={<FaBars />} variant="ghost" aria-label="Open Menu" />
        <Stack direction="row" spacing={4}>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#case-studies">Case Studies</Link>
          <IconButton icon={<FaUserCircle />} variant="ghost" aria-label="Login" />
        </Stack>
      </Flex>

      <VStack as="section" align="stretch" py={20} bgImage="https://images.unsplash.com/photo-1611094601537-cdbb75b979cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkeW5hbWljJTIwaGVhbHRoJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3MTUyODU4NTN8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" textAlign="center">
        <Heading size="2xl" color="white">
          Transform Your Health Today
        </Heading>
        <Text fontSize="xl" color="white" maxW="lg" mx="auto">
          Join thousands who are already improving their health with our technology.
        </Text>
        <Button colorScheme="blue" size="lg" mt={4}>
          Get Started
        </Button>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} as="section" p={10} id="features">
        <FeatureCard title="Personalized Insights" description="Get tailored health advice based on your unique profile." />
        <FeatureCard title="Real-time Monitoring" description="Track your health metrics in real-time with our advanced tools." />
        <FeatureCard title="Community Support" description="Connect with others and share experiences and tips." />
      </SimpleGrid>

      <Box as="section" p={10} bg="gray.100">
        <Heading size="lg" textAlign="center" mb={6}>
          What Our Users Say
        </Heading>
        <TestimonialCarousel />
      </Box>

      <Flex as="section" justifyContent="center" p={10} bg="blue.500" color="white">
        <VStack spacing={4}>
          <Heading size="lg">Ready to Take the Next Step?</Heading>
          <Text>Sign up today and start your journey to better health!</Text>
          <Button colorScheme="whiteAlpha">Sign Up Now</Button>
        </VStack>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" py={6} px={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Text>© 2023 HealthTech SaaS</Text>
          <Stack>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </Stack>
          <Stack direction="row" spacing={4}>
            <IconButton icon={<FaFacebook />} aria-label="Facebook" variant="ghost" />
            <IconButton icon={<FaTwitter />} aria-label="Twitter" variant="ghost" />
            <IconButton icon={<FaInstagram />} aria-label="Instagram" variant="ghost" />
            <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" variant="ghost" />
          </Stack>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

const FeatureCard = ({ title, description }) => (
  <VStack bg="white" p={4} borderRadius="md" boxShadow="md" _hover={{ boxShadow: "lg" }}>
    <Heading size="md">{title}</Heading>
    <Text>{description}</Text>
  </VStack>
);

const TestimonialCarousel = () => (
  <Flex overflowX="scroll" gap={6}>
    <TestimonialCard text="This platform has changed the way I manage my health, providing all the tools I need in one place." author="Jane Doe" />
    <TestimonialCard text="The insights provided are incredibly accurate and helpful. Highly recommend!" author="John Smith" />
    <TestimonialCard text="A must-have for anyone serious about their health and wellness." author="Emily Wright" />
  </Flex>
);

const TestimonialCard = ({ text, author }) => (
  <VStack bg="white" p={4} borderRadius="md" boxShadow="md" minW="sm">
    <Text fontSize="sm">{text}</Text>
    <Text fontSize="xs" fontWeight="bold">
      {author}
    </Text>
  </VStack>
);

export default Index;
