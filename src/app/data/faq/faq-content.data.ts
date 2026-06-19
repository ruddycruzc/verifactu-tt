import { FaqContent } from '../../interfaces/data/faq-content.interface';

export const FAQ_CONTENT: FaqContent = {
  title: 'Preguntas',
  titleHighlight: 'frecuentes',
  subtitle:
    'Respondemos las dudas más habituales sobre Verifactu y la adaptación de tu software.',

  items: [
    {
      question: '¿Qué es Verifactu?',
      answer:
        'Verifactu es el nuevo sistema impulsado por la Agencia Tributaria para garantizar la integridad y trazabilidad de los registros de facturación.',
      isOpen: true
    },
    {
      question: '¿Es obligatorio?',
      answer:
        'Sí. La normativa afectará progresivamente a empresas y autónomos que utilicen software de facturación.'
    },
    {
      question: '¿Puedo seguir usando mi software actual?',
      answer:
        'Dependerá de si tu proveedor adapta la aplicación a los requisitos establecidos por la Agencia Tributaria.'
    },
    {
      question: '¿Cuándo entra en vigor?',
      answer:
        'Las fechas exactas dependen de la normativa vigente y de los plazos establecidos por la administración.'
    }
  ]
};