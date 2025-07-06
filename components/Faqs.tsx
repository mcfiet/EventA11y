import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faqs() {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Frage?
        </AccordionSummary>
        <AccordionDetails>Antwort.</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Frage?
        </AccordionSummary>
        <AccordionDetails>Antwort.</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Frage?
        </AccordionSummary>
        <AccordionDetails>Antwort.</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Frage?
        </AccordionSummary>
        <AccordionDetails>Antwort.</AccordionDetails>
      </Accordion>
    </>
  );
}
