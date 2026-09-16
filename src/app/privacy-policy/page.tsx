import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { BreadcrumbJsonLd } from "@/components/chrome/JsonLd";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fatima Karahi collects, uses, and protects your personal information when you visit our restaurant, order online, or use our website.",
  alternates: { canonical: "/privacy-policy" },
};

const h2 = "mt-s7 mb-s3 font-display text-display-m font-normal text-ink";
const p = "m-0 mt-s3 text-body leading-[1.8] text-ink";
const ul = "m-0 mt-s3 list-disc space-y-s2 pl-s5 text-body leading-[1.8] text-ink";
const link = "link-underline text-gold-deep no-underline";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-emerald pb-[clamp(3rem,6vw,4.5rem)] pt-[calc(84px+clamp(2.5rem,6vw,4rem))] text-center">
        <Eyebrow size="lg">Legal</Eyebrow>
        <h1 className="m-0 mt-s4 font-display text-display-l font-normal text-ivory">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-s3 max-w-[60ch] px-s5 text-body text-sage">
          Effective Date: September 16, 2026
        </p>
      </section>

      <section className="bg-ivory py-section text-ink">
        <div className="mx-auto max-w-[70ch] px-[clamp(20px,5vw,56px)]">
          <p className={p}>
            Fatima Karahi (&ldquo;Fatima Karahi&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal
            information you provide when you visit our restaurant, use our website, place an
            online order, request catering information, contact us, or otherwise interact with
            us.
          </p>
          <p className={p}>
            This Privacy Policy explains what personal information we may collect, how we use
            it, when we may share it, how we protect it, and the choices and rights available to
            you.
          </p>
          <p className={p}>Fatima Karahi is located at:</p>
          <p className={p}>
            <strong>Fatima Karahi</strong>
            <br />
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region}
            <br />
            Canada
          </p>
          <p className={p}>
            <strong>Phone:</strong> {site.phone}
            <br />
            <strong>Email:</strong>{" "}
            <a href={`mailto:${site.email}`} className={link}>
              {site.email}
            </a>
            <br />
            <strong>Website:</strong>{" "}
            <a href={site.url} className={link}>
              {site.url}/
            </a>
          </p>
          <p className={p}>
            By using our website or voluntarily providing personal information to us, you
            acknowledge that you have read and understood this Privacy Policy.
          </p>

          <h2 className={h2}>1. Personal Information We Collect</h2>
          <p className={p}>
            Depending on how you interact with Fatima Karahi, we may collect information such as:
          </p>
          <p className={p}>
            <strong>Information you provide directly</strong>
          </p>
          <ul className={ul}>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Delivery address</li>
            <li>Billing information</li>
            <li>Order details</li>
            <li>Catering or event information</li>
            <li>Reservation or group-booking information</li>
            <li>Special instructions or requests</li>
            <li>Information submitted through our contact or catering forms</li>
            <li>Feedback, comments, or inquiries</li>
          </ul>
          <p className={p}>
            We only request information that is reasonably necessary for the purpose for which
            it is collected.
          </p>
          <p className={p}>
            <strong>Payment Information</strong>
          </p>
          <p className={p}>
            When you place an order or make a payment, payment information may be processed
            through our payment processors or online ordering providers.
          </p>
          <p className={p}>
            We generally do not need to store your complete credit or debit card number on our
            own systems. Payment information may be transmitted directly to the applicable
            payment processor in accordance with its privacy and security practices.
          </p>
          <p className={p}>
            <strong>Automatically Collected Information</strong>
          </p>
          <p className={p}>
            When you visit our website, certain technical information may be collected
            automatically, such as:
          </p>
          <ul className={ul}>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Date and time of visits</li>
            <li>Referring website</li>
            <li>General website usage information</li>
          </ul>
          <p className={p}>
            This information may be used for website functionality, security, analytics,
            troubleshooting, and improving our services.
          </p>

          <h2 className={h2}>2. How We Use Your Information</h2>
          <p className={p}>We may use personal information for purposes including:</p>
          <ul className={ul}>
            <li>Processing and fulfilling food orders</li>
            <li>Processing payments</li>
            <li>Arranging delivery or pickup</li>
            <li>Responding to questions and customer inquiries</li>
            <li>Processing catering requests</li>
            <li>Communicating with you regarding your order</li>
            <li>Confirming or managing group bookings or event requests</li>
            <li>Providing customer service</li>
            <li>Responding to feedback or complaints</li>
            <li>Improving our food, restaurant, website, and services</li>
            <li>Maintaining website and system security</li>
            <li>Detecting and preventing fraud or unauthorized activity</li>
            <li>Maintaining appropriate business and transaction records</li>
            <li>
              Sending promotional communications where permitted and where you have provided
              appropriate consent
            </li>
            <li>
              Complying with applicable legal, accounting, tax, regulatory, or law-enforcement
              requirements
            </li>
          </ul>
          <p className={p}>
            We aim to collect and use personal information only for identified and reasonable
            purposes. Canadian privacy guidance emphasizes identifying purposes before or when
            information is collected.
          </p>

          <h2 className={h2}>3. Online Ordering</h2>
          <p className={p}>
            Fatima Karahi provides online ordering through a third-party online ordering
            platform.
          </p>
          <p className={p}>
            When you place an online order, information necessary to complete the transaction
            may be shared with the applicable ordering, payment, delivery, or technology service
            providers.
          </p>
          <p className={p}>This information may include:</p>
          <ul className={ul}>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Order details</li>
            <li>Pickup or delivery information</li>
            <li>Payment-related information</li>
            <li>Special order instructions</li>
          </ul>
          <p className={p}>
            Third-party providers may have their own privacy policies and terms. We encourage
            you to review the applicable third party&rsquo;s privacy policy before using its
            services.
          </p>

          <h2 className={h2}>4. Delivery Services and Third Parties</h2>
          <p className={p}>
            Fatima Karahi may offer delivery through third-party delivery platforms, including
            services such as Uber Eats and DoorDash.
          </p>
          <p className={p}>
            If you choose to order through a third-party platform, your information may be
            collected and processed by that platform according to its own privacy policy.
          </p>
          <p className={p}>
            We are not responsible for the privacy practices, policies, or security measures of
            third-party websites, applications, payment processors, delivery services, or other
            external services.
          </p>

          <h2 className={h2}>5. Catering and Event Requests</h2>
          <p className={p}>
            If you submit a catering or event inquiry, we may collect information such as:
          </p>
          <ul className={ul}>
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Event date</li>
            <li>Event location</li>
            <li>Estimated number of guests</li>
            <li>Catering requirements</li>
            <li>Food preferences</li>
            <li>Other information necessary to prepare a quote or fulfill your request</li>
          </ul>
          <p className={p}>
            We use this information to communicate with you, prepare quotes, plan catering
            services, and fulfill your event requirements.
          </p>

          <h2 className={h2}>6. Contact Forms</h2>
          <p className={p}>
            Information submitted through our website contact forms may be used to respond to
            your inquiry, provide customer support, answer questions, or follow up regarding
            Fatima Karahi&rsquo;s services.
          </p>
          <p className={p}>
            Please avoid submitting sensitive personal information through general contact forms
            unless specifically requested and necessary.
          </p>

          <h2 className={h2}>7. Cookies and Similar Technologies</h2>
          <p className={p}>Our website may use cookies and similar technologies to:</p>
          <ul className={ul}>
            <li>Make the website function properly</li>
            <li>Remember certain preferences</li>
            <li>Understand website usage</li>
            <li>Improve website performance</li>
            <li>Measure marketing and advertising effectiveness</li>
            <li>Help maintain website security</li>
          </ul>
          <p className={p}>
            Third-party services used on our website may also use cookies or similar
            technologies.
          </p>
          <p className={p}>
            You may be able to control cookies through your browser settings. Disabling certain
            cookies may affect the functionality of portions of the website.
          </p>

          <h2 className={h2}>8. Analytics and Advertising</h2>
          <p className={p}>
            We may use analytics, advertising, or measurement services to understand how
            visitors use our website and to improve our marketing efforts.
          </p>
          <p className={p}>
            These services may collect information such as IP address, browser/device
            information, pages visited, and interactions with advertisements or website content.
          </p>
          <p className={p}>
            Where applicable, third-party providers may use cookies or similar technologies for
            measurement or advertising purposes.
          </p>

          <h2 className={h2}>9. Marketing Communications</h2>
          <p className={p}>
            If you choose to receive promotional communications from us, we may use your email
            address or phone number to send information about:
          </p>
          <ul className={ul}>
            <li>Special offers</li>
            <li>Restaurant promotions</li>
            <li>New menu items</li>
            <li>Catering services</li>
            <li>Events</li>
            <li>Discounts</li>
            <li>Other Fatima Karahi updates</li>
          </ul>
          <p className={p}>
            You may unsubscribe from promotional emails at any time by following the unsubscribe
            instructions included in the communication.
          </p>
          <p className={p}>
            Where applicable, electronic marketing communications will be handled in accordance
            with applicable Canadian anti-spam and privacy requirements.
          </p>
          <p className={p}>
            You may also contact us directly if you no longer wish to receive promotional
            communications.
          </p>

          <h2 className={h2}>10. When We Share Personal Information</h2>
          <p className={p}>We do not sell or rent your personal information.</p>
          <p className={p}>
            We may disclose personal information to service providers when reasonably necessary
            to operate our business, including:
          </p>
          <ul className={ul}>
            <li>Online ordering providers</li>
            <li>Payment processors</li>
            <li>Delivery providers</li>
            <li>Website hosting providers</li>
            <li>IT and technology providers</li>
            <li>Email or communication providers</li>
            <li>Analytics and advertising providers</li>
            <li>Accounting, legal, or professional advisors</li>
            <li>Government authorities or law enforcement where required or permitted by law</li>
          </ul>
          <p className={p}>
            We seek to ensure that service providers handling personal information on our behalf
            use appropriate safeguards and handle information only for authorized purposes.
          </p>
          <p className={p}>
            Canadian privacy guidance recognizes that organizations remain responsible for
            personal information under their control, including information transferred to third
            parties for processing.
          </p>

          <h2 className={h2}>11. Payment Processing</h2>
          <p className={p}>Payments may be processed by third-party payment providers.</p>
          <p className={p}>
            Fatima Karahi does not intend to collect or store complete payment card information
            unless specifically necessary and permitted through the applicable payment system.
          </p>
          <p className={p}>
            Payment processors may collect and process payment information under their own terms
            and privacy policies.
          </p>

          <h2 className={h2}>12. Protection of Personal Information</h2>
          <p className={p}>
            We take reasonable administrative, technical, and physical safeguards to protect
            personal information against:
          </p>
          <ul className={ul}>
            <li>Unauthorized access</li>
            <li>Unauthorized disclosure</li>
            <li>Loss</li>
            <li>Theft</li>
            <li>Misuse</li>
            <li>Alteration</li>
            <li>Destruction</li>
          </ul>
          <p className={p}>
            The level of security measures used may depend on the sensitivity of the
            information.
          </p>
          <p className={p}>
            However, no website, electronic transmission, database, or storage system can be
            guaranteed to be completely secure.
          </p>

          <h2 className={h2}>13. Retention of Personal Information</h2>
          <p className={p}>
            We retain personal information only for as long as reasonably necessary to fulfill
            the purposes for which it was collected, provide services, maintain appropriate
            business records, resolve disputes, enforce agreements, and satisfy legal,
            accounting, tax, or regulatory requirements.
          </p>
          <p className={p}>
            When information is no longer required, we take reasonable steps to securely delete,
            destroy, or anonymize it, subject to applicable legal requirements.
          </p>

          <h2 className={h2}>14. Accessing and Correcting Your Information</h2>
          <p className={p}>
            You may request access to personal information that Fatima Karahi holds about you,
            subject to applicable legal exceptions.
          </p>
          <p className={p}>
            You may also request that inaccurate or incomplete information be corrected.
          </p>
          <p className={p}>
            To make an access or correction request, contact us using the information provided
            in the Contact Us section below.
          </p>
          <p className={p}>
            Canadian privacy principles generally provide individuals with a right to request
            access to their personal information and challenge its accuracy and completeness.
          </p>

          <h2 className={h2}>15. Withdrawal of Consent</h2>
          <p className={p}>
            Where we rely on your consent to collect, use, or disclose personal information, you
            may withdraw your consent, subject to legal or contractual restrictions and
            reasonable notice.
          </p>
          <p className={p}>
            Withdrawing consent may affect our ability to provide certain services. For example,
            if information is necessary to process an order, we may not be able to complete the
            order without that information.
          </p>
          <p className={p}>
            Canadian privacy guidance recognizes that individuals may withdraw consent, subject
            to applicable restrictions and reasonable notice.
          </p>

          <h2 className={h2}>16. Children&rsquo;s Privacy</h2>
          <p className={p}>Our website and services are intended for a general audience.</p>
          <p className={p}>
            We do not knowingly collect personal information from children where such collection
            is prohibited by applicable law.
          </p>
          <p className={p}>
            If you believe that a child has provided personal information to us improperly,
            please contact us so that we can review the situation and take appropriate action.
          </p>

          <h2 className={h2}>17. Third-Party Websites</h2>
          <p className={p}>
            Our website may contain links to third-party websites, applications, social media
            platforms, online ordering services, delivery services, or other external websites.
          </p>
          <p className={p}>These third-party services are not controlled by Fatima Karahi.</p>
          <p className={p}>
            Once you leave our website, the third party&rsquo;s privacy policy and terms may
            apply. We recommend reviewing the privacy policies of any third-party service before
            providing personal information.
          </p>

          <h2 className={h2}>18. Social Media</h2>
          <p className={p}>
            Fatima Karahi may maintain social media accounts or provide links to social media
            platforms.
          </p>
          <p className={p}>
            Interactions with social media platforms may result in information being collected
            by those platforms according to their respective privacy policies.
          </p>
          <p className={p}>
            We encourage users to review the privacy settings and policies of the social media
            platforms they use.
          </p>

          <h2 className={h2}>19. International Processing</h2>
          <p className={p}>
            Some of our third-party service providers may store or process information outside
            Alberta or Canada.
          </p>
          <p className={p}>
            Where personal information is transferred to a service provider outside Canada, it
            may be subject to the laws of the jurisdiction where it is processed.
          </p>
          <p className={p}>
            We take reasonable steps to ensure that personal information handled by service
            providers is appropriately protected and used only for authorized purposes.
          </p>

          <h2 className={h2}>20. Privacy Breaches</h2>
          <p className={p}>
            If we become aware of a privacy breach involving personal information, we will
            assess the circumstances and take reasonable steps to contain the breach,
            investigate it, reduce potential harm, and comply with applicable legal requirements.
          </p>
          <p className={p}>
            Where notification is legally required, we will provide notification to affected
            individuals and/or applicable regulators as required by law.
          </p>

          <h2 className={h2}>21. Changes to This Privacy Policy</h2>
          <p className={p}>
            We may update this Privacy Policy from time to time to reflect changes in:
          </p>
          <ul className={ul}>
            <li>Our services</li>
            <li>Website functionality</li>
            <li>Technology</li>
            <li>Third-party service providers</li>
            <li>Privacy practices</li>
            <li>Applicable laws or regulations</li>
          </ul>
          <p className={p}>
            When we make changes, we may update the Effective Date shown at the beginning of
            this Privacy Policy.
          </p>
          <p className={p}>We encourage you to review this page periodically.</p>

          <h2 className={h2}>22. Contact Us</h2>
          <p className={p}>
            If you have questions about this Privacy Policy, wish to request access to or
            correction of your personal information, wish to withdraw consent, or have a privacy
            concern or complaint, please contact us.
          </p>
          <p className={p}>
            <strong>Fatima Karahi</strong>
            <br />
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region}
            <br />
            Canada
          </p>
          <p className={p}>
            <strong>Phone:</strong> {site.phone}
            <br />
            <strong>Email:</strong>{" "}
            <a href={`mailto:${site.email}`} className={link}>
              {site.email}
            </a>
          </p>
          <p className={p}>
            We will review privacy inquiries and complaints and take reasonable steps to address
            concerns.
          </p>

          <h2 className={h2}>23. Privacy Accountability</h2>
          <p className={p}>
            Fatima Karahi is responsible for personal information under its control and will
            designate an appropriate person or role to oversee privacy-related inquiries and
            compliance.
          </p>
          <p className={p}>
            Our privacy practices are intended to follow applicable Canadian privacy
            requirements and principles, including transparency, meaningful consent, limiting
            collection, safeguarding personal information, access, and accountability.
          </p>

          <p className="m-0 mt-s7 text-eyebrow uppercase tracking-[0.05em] text-stone">
            Last Updated: September 16, 2026
          </p>

          <p className={p}>
            <Link href="/" className={link}>
              ← Back to home
            </Link>
          </p>
        </div>
      </section>

      <BreadcrumbJsonLd name="Privacy Policy" path="/privacy-policy/" />
    </>
  );
}
