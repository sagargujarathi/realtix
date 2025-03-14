import ClientLoginForm from "../../components/auth/ClientLoginForm";

// This is now a Server Component
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <a href="/" className="flex items-center text-primary-600">
            <span className="text-3xl font-bold">Realtix</span>
          </a>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-secondary-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-secondary-600">
          Or{" "}
          <a
            href="/register"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            start your 14-day free trial
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <ClientLoginForm />
      </div>
    </div>
  );
}
