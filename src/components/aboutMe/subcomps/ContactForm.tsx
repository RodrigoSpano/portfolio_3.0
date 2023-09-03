import { useForm, ValidationError } from '@formspree/react';
import { Button, Input, Textarea } from '@nextui-org/react';
import { useLangStore } from '../../../zustand/languageStore';
export default function ContactForm() {
  const {language} = useLangStore()
  const [state, handleSubmit] = useForm("xleynnln");
  if (state.succeeded) {
      return <p>{language === 'en' ? 'email has been sent, thanks!': 'Correo enviado, gracias por contactarme!'}</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <Input
          type="email"
          id='email'
          name='email'
          label="Email"
          variant="bordered"
          placeholder="example@email.com"
          className="max-w-xs"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <Textarea
          label={language === 'en' ? 'Message' : 'Mensaje'}
          variant='bordered'
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <Button type="submit" color='primary' disabled={state.submitting}>
          {language === 'en' ? 'Submit' : 'Enviar'}
        </Button>
    </form>
  );
}