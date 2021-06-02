import {
  Box,
  Flex,
  Container,
  Button,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
} from "theme-ui";
import { keyframes } from "@emotion/core";
import SectionHeader from "components/section-header";

export default function ContactForm() {
  return (
    <section id="contact">
      <Container>
        <SectionHeader
          title="Contact us"
          slogan="We look forward to working with you."
        />
        <Container sx={styles.container}>
          <Box as="form" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="name">Your Name</Label>
            <Input name="name" id="name" mb={3} />
            <Label htmlFor="email">Your Email</Label>
            <Input type="email" name="email" id="email" mb={3} />
            <Box>
              <Label mb={3}>
                <Checkbox />
                Remember me
              </Label>
            </Box>
            <Label htmlFor="message">Message</Label>
            <Textarea name="message" id="message" rows={6} mb={6} />

            <Box sx={styles.button}>
              <Button> Submit </Button>
            </Box>
          </Box>
        </Container>
      </Container>
    </section>
  );
}

const positionAnim = keyframes`
  from {
      position: fixed;
      opacity: 1;
  }

  to {
      position: absolute;
      opacity: 1;
      transition: all 0.4s ease;
  }
`;

const styles = {
  button: {
    textAlign: "center",
    mb: 50,
  },
  container: {
    // py: 2,
    px: 4,
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
  },
};
