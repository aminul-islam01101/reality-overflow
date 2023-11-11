/* eslint-disable react/require-default-props */

'use client';

import { ReactElement, ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';

type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
  mode?: 'onChange';
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

function ReForm({ children, submitHandler, defaultValues, resolver }: FormProps) {
  const formConfig: FormConfig = {};
  formConfig.mode = 'onChange';

  if (defaultValues) formConfig.defaultValues = defaultValues;
  if (resolver) formConfig.resolver = resolver;

  const form = useForm(formConfig);

  const { handleSubmit, reset } = form;

  const onSubmit: SubmitHandler<any> = (data) => {
    submitHandler(data);
    // reset();
  };
  // useEffect(() => reset(defaultValues), [defaultValues, reset, form]);
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-3 overflow-x-hidden">
        {children}
      </form>
    </Form>
  );
}

export default ReForm;
