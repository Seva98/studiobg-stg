'use client';

import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from './button';
import Loader from './loader';

const FormSubmitButton = ({
  size,
  children,
  ...props
}: Readonly<{
  size?: ButtonProps['size'];
  children: React.ReactNode;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="ghost" disabled={pending} {...props}>
      {pending ? <Loader /> : children}
    </Button>
  );
};

export default FormSubmitButton;
