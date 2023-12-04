import { SwaggerDisplay } from "@/components/SwaggerDisplay";
import { getApiDocs } from "@/lib/swagger";

const SwaggerPage = async () => {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <SwaggerDisplay spec={spec} />
    </section>
  );
};

export default SwaggerPage;
