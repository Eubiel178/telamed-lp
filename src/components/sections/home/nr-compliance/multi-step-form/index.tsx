"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { toast } from "sonner";

import { RadioGroup, InputMask } from "@/components";

import * as S from "./styles";
import { SuccessMessage } from "./success";

type FormData = {
  nome?: string;
  empresa?: string;
  email?: string;
  whatsapp?: string;
  collaborators?: string;
  psychologicalSupport?: string;
  burnoutIssues?: string;
  emotionalProfile?: string;
  nr01Knowledge?: string;
};

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<FormData>({});
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    collaborators: "",
    psychologicalSupport: "",
    burnoutIssues: "",
    emotionalProfile: "",
    nr01Knowledge: "",
  });

  const totalSteps = 6;
  const percentage = Math.round(((step - 1) / totalSteps) * 100);

  const optionalMessageStep: { [key: number]: string } = {
    2: "Esta pergunta é opcional. Você pode pular clicando em próximo.",
    3: "Esta pergunta é opcional. Você pode pular clicando em próximo.",
    4: "Esta pergunta é opcional. Você pode pular clicando em próximo.",
    5: "Esta pergunta é opcional. Você pode pular clicando em próximo.",
    6: "Esta pergunta é opcional, você pode pular e baixar o material sobre a NR01.",
  };

  const stepFields: Record<number, (keyof FormData)[]> = {
    1: ["nome", "empresa", "email", "whatsapp"],
  };

  const validators: Partial<Record<keyof FormData, (v: string) => string>> = {
    nome: (v) =>
      v.trim().length < 2 ? "Nome deve ter pelo menos 2 caracteres" : "",

    empresa: (v) =>
      v.trim().length < 2
        ? "Nome da empresa deve ter pelo menos 2 caracteres"
        : "",

    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Email inválido",
    whatsapp: (v) => {
      const numbers = v.replace(/\D/g, "");

      if (numbers.length < 11)
        return "O número de telefone deve ter pelo menos 11 dígitos";

      return "";
    },
  };

  function validateFields(data: FormData, fields: (keyof FormData)[]): boolean {
    const newErrors: Partial<FormData> = {};

    fields.forEach((field) => {
      const value = data[field]?.trim();

      if (!value) {
        newErrors[field] = "Campo obrigatório";
        return;
      }

      const validator = validators[field];

      if (validator) {
        const error = validator(value);

        if (error) {
          newErrors[field] = error;
        }
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleChange(event: Partial<React.ChangeEvent<HTMLInputElement>>) {
    if (!event?.target) return;

    const { name, value } = event?.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[name as keyof FormData];
      return updated;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formData);
  }

  function nextStep() {
    const fieldsToValidate = stepFields[step];

    if (fieldsToValidate) {
      const isValid = validateFields(formData, fieldsToValidate);

      if (!isValid) return;
    }

    if (step === 1) {
      toast.success("Dados enviados! Continue respondendo as perguntas.");
    }

    if (step === 6) {
      try {
        toast.success("Obrigado por responder!");
      } catch (error) {
        toast.error("Erro ao enviar os dados.");
      }
    }

    setStep((prev) => Math.min(prev + 1, totalSteps + 1));
  }

  return (
    <S.MultiStepForm>
      <Link href="/" className="logo">
        <Image
          src="./images/logo-footer.png"
          width={233.48}
          height={80}
          alt="Logo rodape: telamed"
          objectFit="contain"
        />
      </Link>

      <h2>
        Faça o teste agora
        <br />
        <span>e descubra se sua empresa está em conformidade com a NR01</span>
      </h2>

      <form>
        {step > totalSteps ? (
          <SuccessMessage />
        ) : (
          <>
            <div className="progress">
              <p>
                Etapa {step} de {totalSteps} <span>{percentage}%</span>
              </p>

              <div className="progress-track">
                <div className="bar" style={{ width: `${percentage}%` }} />
              </div>
            </div>

            {step === 1 && (
              <div className="step-1">
                <h3>Preencha seus dados:</h3>

                <div className="field">
                  <input
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                  />

                  {errors.nome && (
                    <p className="error-message">{errors.nome}</p>
                  )}
                </div>

                <div className="field">
                  <input
                    name="empresa"
                    placeholder="Nome da empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                  />

                  {errors.empresa && (
                    <p className="error-message">{errors.empresa}</p>
                  )}
                </div>

                <div className="field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>

                <div className="field">
                  <InputMask
                    name="whatsapp"
                    mask="(99) 9 9999-9999"
                    placeholder="WhatsApp (com DDD)"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />

                  {errors.whatsapp && (
                    <p className="error-message">{errors.whatsapp}</p>
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3>Quantos colaboradores você possui?</h3>

                <RadioGroup
                  name="collaborators"
                  options={["0 - 10", "11 - 50", "51 - 100", "Mais de 100"]}
                  value={formData.collaborators}
                  onChange={handleChange}
                />

                {errors.collaborators && (
                  <p className="error-message">{errors.collaborators}</p>
                )}
              </div>
            )}

            {step === 3 && (
              <div>
                <h3>
                  Você já oferece suporte psicológico para os seus
                  colaboradores?
                </h3>

                <RadioGroup
                  name="psychologicalSupport"
                  options={[
                    "Sim, oferecemos.",
                    "Oferecemos algo básico.",
                    "Não oferecemos.",
                  ]}
                  value={formData.psychologicalSupport}
                  onChange={handleChange}
                />

                {errors.collaborators && (
                  <p className="error-message">{errors.psychologicalSupport}</p>
                )}
              </div>
            )}
            {step === 4 && (
              <div>
                <h3>
                  Sua empresa sofre com faltas, atestados e rotatividades de
                  funcionários por causa de burnout, depressão e ansiedade?
                </h3>

                <RadioGroup
                  name="burnoutIssues"
                  options={[
                    "Sim, com muita frequência.",
                    "Às vezes acontece.",
                    "Não é um problema hoje.",
                  ]}
                  value={formData.burnoutIssues}
                  onChange={handleChange}
                />

                {errors.burnoutIssues && (
                  <p className="error-message">{errors.burnoutIssues}</p>
                )}
              </div>
            )}

            {step === 5 && (
              <div>
                <h3>Você conhece o perfil emocional dos seus colaboradores?</h3>

                <RadioGroup
                  name="emotionalProfile"
                  options={[
                    "Sim, temos dados e acompanhamento.",
                    "Temos uma noção, mas sem dados.",
                    "Não temos esse mapeamento.",
                  ]}
                  value={formData.emotionalProfile}
                  onChange={handleChange}
                />

                {errors.emotionalProfile && (
                  <p className="error-message">{errors.emotionalProfile}</p>
                )}
              </div>
            )}

            {step === 6 && (
              <div>
                <h3>
                  Você sabe o que é a Lei NR01 e o que você deve fazer para
                  evitar multas?
                </h3>

                <RadioGroup
                  name="nr01Knowledge"
                  options={[
                    "Sim, estamos adequados.",
                    "Conheço, mas não estamos 100%.",
                    "Ainda não conheço.",
                  ]}
                  value={formData.nr01Knowledge}
                  onChange={handleChange}
                />

                {errors.nr01Knowledge && (
                  <p className="error-message">{errors.nr01Knowledge}</p>
                )}
              </div>
            )}

            <div className="buttons">
              {step === 6 ? (
                <a
                  href="./video/Material-Sobre-a-NR-01.mp4"
                  target="_blank"
                  download
                  onClick={nextStep}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                  Baixe o material sobre a NR-01
                </a>
              ) : (
                <button type="button" onClick={nextStep}>
                  {step === 1 ? "Iniciar" : "Próximo"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              )}
            </div>

            {optionalMessageStep[step] && (
              <p className="optional">{optionalMessageStep[step]}</p>
            )}
          </>
        )}
      </form>
    </S.MultiStepForm>
  );
}
