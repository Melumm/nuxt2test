/* plugins/client.js */
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fpctsjcdpigynxpngqjn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwY3RzamNkcGlneW54cG5ncWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzMzczMTAsImV4cCI6MTk5OTkxMzMxMH0.0qM883Y5qJE37-Wyu4WJ1LspRaZkHA8YQswOn49UPao"
);

export default (_, inject) => {
  inject("supabase", supabase);
};
