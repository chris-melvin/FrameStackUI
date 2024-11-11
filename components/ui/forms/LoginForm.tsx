export default function LoginForm() {
  return (
    <div className="max-w-md w-full space-y-6 bg-white dark:bg-gray-800 p-4 @sm:p-8 rounded-xl shadow-lg mx-auto">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl @sm:text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Please sign in to your account
        </p>
      </div>

      {/* Form */}
      <form className="mt-6 @sm:mt-8 space-y-4 @sm:space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        {/* Remember me & Forgot password */}
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-4 xs:gap-0">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <div>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 @sm:py-2.5 px-3 sm:px-4 border border-transparent rounded-lg
              text-sm font-medium text-white bg-blue-600 hover:bg-blue-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              transition-colors duration-200"
        >
          Sign in
        </button>

        {/* Sign up link */}
        <div className="text-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?
          </span>
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}
