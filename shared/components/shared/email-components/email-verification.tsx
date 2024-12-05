import { FC } from 'react';

interface Props {
  code: string;
}
export const EmailVerification: FC<Props> = ({ code }) => {
  return (
    <div>
      <h1>
        Код подтверждения: <h2>{code}</h2>
      </h1>
      <p>
        <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>Подтвердить регистрацию</a>
      </p>
    </div>
  );
};
