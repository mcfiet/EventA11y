import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faqs() {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Was ist Event A11y und was bietet die Website?
        </AccordionSummary>
        <AccordionDetails>
          Event A11y (Accessibility) ist eine Plattform, die sich darauf
          spezialisiert, Veranstaltungen inklusiv und barrierefrei zu gestalten.
          Auf eventa11y.devoniq.de finden sich Leitfäden, Checklisten und
          Werkzeuge, die Event‑Organisatoren unterstützen, Events so zu planen,
          dass sie für alle zugänglich sind – unabhängig von Behinderungen.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Welche Barrieren werden bei Veranstaltungen thematisiert?
        </AccordionSummary>
        <AccordionDetails>
          Die Seite behandelt verschiedene Bereiche der Zugänglichkeit, zum
          Beispiel:
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemText primary="Digitale Barrierefreiheit (z. B. Website, Apps)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Zugang zu physischen Räumen (z. B. Rollstuhlrampen, taktile Wegweiser)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Unterstützung für Gehörlose (z. B. Gebärdensprachdolmetscher, Untertitel)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Angebote für sehbehinderte Gäste (z. B. Audiodeskription, große Druckmaterialien)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Ruhebereiche für Menschen mit sensorischen oder kognitiven Bedürfnissen" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Gibt es konkrete Tools oder Checklisten, die ich nutzen kann?
        </AccordionSummary>
        <AccordionDetails>
          Ja – die Seite stellt nützliche Ressourcen wie PDF-Checklisten,
          Formulare für barrierefreie Registrierung, Tipps für barrierefreies
          Personaltraining und technische Tools zur Verfügung. Diese Materialien
          helfen dabei, systematisch jede Phase der Eventplanung zugänglich zu
          machen.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          An wen richtet sich das Angebot?
        </AccordionSummary>
        <AccordionDetails>
          Die Zielgruppe umfasst Event-Organisatoren, Agenturen,
          Location-Betreiber und Technikteams, die Events planen oder betreuen –
          insbesondere solche, die Wert auf Inklusion legen. Aber auch kommunale
          Veranstalter, Bildungsträger oder Kulturschaffende profitieren von den
          Inhalten.
        </AccordionDetails>
      </Accordion>
    </>
  );
}
