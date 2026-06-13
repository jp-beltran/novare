export type BriefingValues = {
  name: string;
  email: string;
  whatsapp: string;
  business: string;
  segment: string;
  pageType: string;
};

export type BriefingErrors = Partial<Record<keyof BriefingValues, string>>;

export function validateBriefing(values: BriefingValues): BriefingErrors {
  const errors: BriefingErrors = {};
  const required: Array<[keyof BriefingValues, string]> = [
    ["name", "Informe seu nome completo."],
    ["email", "Informe seu e-mail corporativo."],
    ["whatsapp", "Informe seu WhatsApp."],
    ["business", "Informe o nome do negócio."],
    ["segment", "Informe o segmento."],
    ["pageType", "Selecione o tipo de página."],
  ];

  for (const [field, message] of required) {
    if (!values[field].trim()) errors[field] = message;
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Informe um e-mail válido.";
  }

  return errors;
}
