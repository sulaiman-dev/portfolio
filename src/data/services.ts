export const capabilities = [
  {
    id: "integrations",
    title: "Integration Engineering",
    items: [
      "Third-party APIs",
      "CRM integrations",
      "Platform connectivity",
      "LLM integrations",
    ],
  },
  {
    id: "dashboards",
    title: "Dashboard Development",
    items: ["Admin Panels", "Analytics", "Reporting", "Internal Tools"],
  },
  {
    id: "automation",
    title: "Workflow Automation",
    items: ["Queues", "Notifications", "Background Jobs", "Business Workflows"],
  },
] as const

export const llmDisclaimer =
  "I integrate LLMs into products but do not work as an ML or AI research engineer."
