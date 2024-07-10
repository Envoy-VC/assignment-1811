This is a Assignment submission for NextJS Typescript Developer position at 1811 Labs.

A simple Pickup Lines Generator using Mistral Large AI Model.

## Demo Video 🎥


https://github.com/Envoy-VC/assignment-1811/assets/65389981/8adc5c9a-0b3f-4017-abef-542ffc422362


## 🧑🏼‍💻 Tech Stack

- Next.js 15 (with React Compiler)
- Supabase (for Authentication with Server Actions)
- Vercel AI SDK (with `mistral-large-latest` model and server actions)
- React Hook Form
- Shadcn and TailwindCSS for styling

## Get Started 🚀

The following repository is a turborepo and divided into the following:

- `apps/www` - The web application built using Next.js.

First install the dependencies by running the following:

```bash
pnpm install
```

Then fill in the Environment variables in `apps/www/.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL="supabase_project_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="supabase_project_anon_key"
MISTRAL_API_KEY="mistral_api_key"
NEXT_PUBLIC_DEPLOYED_URL="http://localhost:3000"
NODE_ENV="development"
```

Finally, run the following command to start the application:

```bash
pnpm dev
```
