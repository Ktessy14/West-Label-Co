# Enquiry form deployment checklist

The contact and sample-request forms use Netlify Forms on the existing static site. No email-service key belongs in the client. This change is not considered live until the host configuration and delivery tests below pass.

## Host setup

1. Open the Netlify project that owns `westlabelco.com.au`. Verify the production domain and deployment source before publishing.
2. Confirm form detection is enabled and the plan supports the expected usage without an unapproved upgrade or spending commitment.
3. Deploy the built `out` directory (or this commit through the existing build integration).
4. Verify Netlify lists both `contact` and `sample-request`, with all fields from `public/__forms.html`.
5. Configure submission email notifications to an approved existing team-member mailbox. Netlify restricts notification recipients to team members on the current plan. Where forwarding to the WestLabelCo inbox is needed, use a narrowly scoped Gmail filter, not mailbox-wide forwarding. Verify the destination and filter before publishing, and keep the source mailbox active.
6. With permission, submit clearly marked test enquiries for each form, confirm they are stored under the correct form, and confirm the notification reaches the inbox. Do not use real customer data in tests.
7. Check keyboard/mobile layout, required-field validation, repeated clicks, network errors, and browser Back/Forward on a deployment preview before publishing.

## Local checks

- `npm ci`
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `node scripts/check-forms.mjs`

A separate local React/JSDOM check covered required-field validation, serialization, duplicate-submit prevention, disabled controls while pending, retained inputs on an HTTP error, retry, and success. This is not evidence of Netlify delivery.

## Behavior

Both forms have semantic named controls and native validation. A native POST and confirmation page work when JavaScript is unavailable. With JavaScript, the form posts URL-encoded fields to `/__forms.html`, displays progress, prevents concurrent submissions and only reports success after a successful response. Errors preserve input and provide the direct email address. A timeout is explicitly treated as unconfirmed, with no automatic retry. Honeypot fields allow Netlify to filter simple spam.

Keep the static definitions and React fields in sync. No price, turnaround, product capability, privacy policy or terms changes are included.

## Notification subjects and scoped forwarding

Both static definitions and rendered forms include one hidden `subject` field:

- Contact: `WestLabelCo website enquiry`
- Sample request: `WestLabelCo website sample request`

The contact category is named `enquiry-type` (label: “Enquiry type”), not `subject`, so a selected category such as `quote` does not replace the email notification subject. Netlify uses the submitted subject in preference to a dashboard custom subject. Verify the real email sender and final subject with marked tests, then match that sender AND these exact subject phrases in the Gmail forwarding filter. Do not forward all Netlify account/security notices. Hidden fields are not a security boundary: a caller can change them. Netlify remains the stored-submission source of truth.

Preview form detection was enabled and both forms were registered on 7 November 2026. Notification setup, scoped forwarding, end-to-end delivery and production publication are separate steps and are not implied by a successful preview build.
