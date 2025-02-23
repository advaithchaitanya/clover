
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { to, feedback } = await req.json();

    // Create HTML table from feedback
    const tableRows = Object.entries(feedback)
      .map(([key, value]) => `<tr><td><strong>${key}</strong></td><td>${value}</td></tr>`)
      .join('');

    const htmlContent = `
      <html>
        <body>
          <h2>New Feedback Received</h2>
          <table border="1" style="border-collapse: collapse; width: 100%;">
            <tbody>${tableRows}</tbody>
          </table>
        </body>
      </html>
    `;

    // Send email using your preferred email service
    // You'll need to implement the actual email sending logic here
    // For example, using Resend, SendGrid, or other email service

    return new Response(
      JSON.stringify({ message: 'Feedback sent successfully' }),
      {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
        status: 200,
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
        status: 500,
      },
    );
  }
});
