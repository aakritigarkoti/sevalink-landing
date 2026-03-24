import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

const tocItems = [
  { id: "interpretation", label: "1. Interpretation" },
  { id: "introduction", label: "2. Introduction" },
  { id: "definitions", label: "3. Definitions" },
  { id: "user-accounts", label: "4. User Accounts" },
  { id: "purchases-payments-billing", label: "5.1 Purchases" },
  { id: "subscriptions", label: "5.2 Subscriptions" },
  { id: "user-content", label: "6. User Content" },
  { id: "governing-law", label: "7. Governing Law" },
  { id: "dispute-resolution", label: "8. Dispute Resolution" },
  { id: "limitation-of-liability", label: "9. Limitation of Liability" },
  { id: "third-party-links", label: "10. Links to Third-Party Websites & Services" },
  { id: "changes-to-terms", label: "11. Changes to Terms & Conditions" },
  { id: "force-majeure", label: "11.1 Force Majeure" },
  { id: "acknowledgment-acceptance", label: "12. Acknowledgment & Acceptance of Terms" },
  { id: "contact-us", label: "13. Contact Us" },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <ScrollToTop />
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <article className="rounded-2xl border border-[#DC262620] bg-white/85 p-6 sm:p-10 md:p-12 shadow-sm">
          <header className="pb-8 border-b border-black/10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Terms & Conditions</h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600">Last Updated: March 24, 2026</p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              SEVALINK - TERMS & CONDITIONS
            </p>
            <p className="mt-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              Please read these terms and conditions carefully before using Our Service.
            </p>
          </header>

          <nav aria-label="Table of contents" className="mt-8 rounded-xl border border-black/10 bg-[#FFF8F0] p-4 sm:p-6">
            <h2 className="text-base font-semibold text-gray-900">Table of Contents</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-red-700 hover:text-red-800 hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section id="interpretation" className="pt-10 pb-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">1. Interpretation</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                The words and expressions used in these Terms and Conditions, where the initial letter is capitalized, shall have the meanings assigned to them under the "Definitions" section set forth below. Such meanings shall apply consistently throughout this Agreement and shall be interpreted in accordance with the context in which they are used.
              </p>
              <p>
                Unless the context otherwise requires, words importing the singular shall include the plural and vice versa, and words importing any gender shall include all genders. Headings and subheadings are provided for convenience only and shall not affect the interpretation of any provision of these Terms.
              </p>
              <p>
                Any reference to a statute, law, or regulation shall include any amendments, modifications, or re-enactments thereof from time to time. In the event of any ambiguity or inconsistency in interpretation, the interpretation that best aligns with the intent of Sevalink and the purpose of these Terms shall prevail.
              </p>
            </div>
          </section>

          <section id="introduction" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">2. Introduction</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                These Terms and Conditions ("Terms") govern your access to and use of the Sevalink platform, including mobile applications, websites, and all associated healthcare facilitation services. By accessing or using Sevalink, you agree to comply with and be legally bound by these Terms.
              </p>
              <p>
                Sevalink Healthcare Technologies Pvt. Ltd. ("Sevalink") operates as a technology-enabled aggregator platform connecting users with third-party healthcare providers including hospitals, doctors, ambulance services, and homecare professionals.
              </p>
            </div>
          </section>

          <section id="definitions" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">3. Definitions</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              For the purposes of these Terms and Conditions, the following terms shall have the meanings assigned to them below. These definitions shall apply uniformly whether the terms are used in singular or plural form and are intended to provide clear interpretation of roles, responsibilities, and scope within the Sevalink platform:
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">3.1 Platform</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              "Platform" refers to the complete digital ecosystem owned, developed, and operated by Sevalink, including but not limited to:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>The Sevalink mobile application (Android and iOS versions)</li>
              <li>The official Sevalink website</li>
              <li>Backend systems, dashboards, and administrative panels</li>
              <li>APIs, integrations, and technical infrastructure</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              The Platform acts solely as a technology-enabled interface that facilitates interaction, communication, and transactions between Users and Service Providers, and does not directly provide medical or healthcare services.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">3.2 User</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              "User" refers to any individual or entity who accesses, registers, or uses the Sevalink Platform for the purpose of browsing, booking, or availing Services. This includes:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Patients seeking healthcare services</li>
              <li>Family members or caregivers booking services on behalf of others</li>
              <li>Any authorized representative acting for a patient</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              The User is responsible for providing accurate information, complying with these Terms, and ensuring lawful use of the Platform at all times.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">3.3 Service Providers</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              "Service Providers" refers to independent third-party professionals or entities listed, registered, or made available through the Platform, including but not limited to:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Hospitals and clinics</li>
              <li>Doctors and medical practitioners</li>
              <li>Ambulance operators and drivers</li>
              <li>Diagnostic centers and laboratories</li>
              <li>Homecare professionals such as nurses, physiotherapists, and caretakers</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              All Service Providers operate independently and are not employees, agents, or representatives of Sevalink. Sevalink does not control, supervise, or guarantee the quality, legality, or outcome of services provided by them.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">3.4 Services</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              "Services" refers to all healthcare-related facilitation services made available through the Platform, including but not limited to:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Ambulance booking (emergency and non-emergency)</li>
              <li>Doctor appointment scheduling</li>
              <li>Telemedicine and online consultations</li>
              <li>Home healthcare services (doctor at home, nursing, physiotherapy, caretakers)</li>
              <li>Diagnostic and lab test booking</li>
              <li>Any additional or future services introduced by Sevalink</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              These Services are facilitated by Sevalink but delivered by third-party Service Providers, and may be subject to availability, location, and provider-specific conditions.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">3.5 Account</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              "Account" refers to the unique, registered profile created by a User on the Sevalink Platform, which enables access to Services and features such as:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Booking and managing services</li>
              <li>Viewing history and records</li>
              <li>Making payments</li>
              <li>Receiving notifications and updates</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              The User is solely responsible for maintaining the confidentiality of Account credentials, ensuring accuracy of information, and all activities carried out under their Account.
            </p>
          </section>

          <section id="user-accounts" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">4. User Accounts</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                When you create an Account on the Sevalink Platform, you agree to provide information that is true, accurate, complete, and up-to-date at all times. You further agree to promptly update such information as necessary to maintain its accuracy. Any failure to provide or maintain accurate information shall constitute a material breach of these Terms, and Sevalink reserves the absolute right to suspend, restrict, or permanently terminate your Account without prior notice.
              </p>
              <p>
                You are solely responsible for maintaining the confidentiality and security of your Account credentials, including your username, password, OTPs, and any other authentication methods. You shall be fully responsible and liable for all activities, transactions, and actions carried out through your Account, whether authorized by you or not, including those resulting from negligence, unauthorized access, or misuse.
              </p>
              <p>You expressly agree:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Not to share, transfer, or disclose your login credentials to any third party</li>
                <li>Not to allow any unauthorized person to access or use your Account</li>
                <li>To immediately notify Sevalink of any suspected or actual unauthorized access, data breach, or security compromise</li>
              </ul>
              <p>
                Sevalink shall not be liable for any loss, damage, or unauthorized transactions arising from your failure to safeguard your Account credentials.
              </p>
              <p>You further agree that your username, profile details, and submitted information:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Shall not impersonate any other individual or entity</li>
                <li>Shall not infringe upon any trademark, intellectual property, or legal rights of any third party</li>
                <li>Shall not contain any offensive, misleading, fraudulent, defamatory, obscene, or unlawful content</li>
              </ul>
              <p>
                Sevalink reserves the right to refuse registration, suspend access, or remove any Account that violates these conditions or is deemed inappropriate, misleading, or harmful to the Platform or its users.
              </p>
              <p>
                Additionally, Sevalink may implement identity verification (including OTP, KYC, or document verification such as Aadhaar, where applicable) to ensure authenticity and prevent misuse. Failure to comply with such verification requirements may result in restricted access or account termination.
              </p>
              <p>By accessing or using the Sevalink Platform, you acknowledge and agree that:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>You are legally competent to enter into this agreement</li>
                <li>You will use the Platform only for lawful and genuine purposes</li>
                <li>You will not engage in fraudulent bookings, misuse of services, or activities that may harm Sevalink, Service Providers, or other Users</li>
              </ul>
              <p>
                Sevalink reserves the right, at its sole discretion, to monitor, review, and take appropriate action (including suspension, termination, or legal proceedings) against any Account involved in suspicious, fraudulent, abusive, or unlawful activities.
              </p>
              <p>
                If you do not agree with any part of these Terms, you must immediately discontinue the use of the Platform.
              </p>
            </div>
          </section>

          <section id="purchases-payments-billing" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">5. Purchases, Payments & Billing</h2>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">5.1 Purchases</h3>
            <div className="mt-3 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                If you wish to purchase any service made available through the Sevalink platform ("Purchase"), you may be required to provide certain information relevant to your transaction, including but not limited to your name, contact details, location, identification details, and valid payment information. All payments shall be processed through authorized third-party payment gateways. By initiating a Purchase, you represent and warrant that you are legally capable of entering into binding contracts and that the information provided by you is accurate, complete, and up to date.
              </p>
              <p>
                Sevalink reserves the right to refuse, cancel, or limit any Purchase at its sole discretion, including but not limited to cases of suspected fraud, incorrect pricing, service unavailability, or violation of these Terms. Sevalink shall not be held liable for any payment failure, processing delay, or transaction error caused by third-party payment providers or banking institutions.
              </p>
              <p>User must provide:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Correct personal details</li>
                <li>Valid payment information</li>
                <li>Payments handled via third-party gateways</li>
              </ul>
              <p>Sevalink can:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Cancel any booking</li>
                <li>Refuse service</li>
              </ul>
              <p>Not responsible for:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Payment failure</li>
                <li>Bank delays</li>
                <li>Gateway errors</li>
              </ul>
            </div>
          </section>

          <section id="subscriptions" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">Subscriptions</h2>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">5.2 Subscriptions</h3>
            <div className="mt-3 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                Certain services offered on Sevalink may be provided on a subscription basis ("Subscriptions"), which may include recurring healthcare services, membership plans, or bundled service packages. Subscriptions shall be billed in advance on a periodic basis, as specified at the time of purchase. By subscribing, you authorize Sevalink and its payment partners to automatically charge applicable fees at each billing cycle.
              </p>
              <p>
                Subscriptions may be canceled by the user at any time; however, cancellations shall only take effect at the end of the current billing cycle, and no refunds shall be provided for partially used subscription periods unless explicitly stated. Sevalink reserves the right to modify, suspend, or discontinue subscription plans at its sole discretion.
              </p>
              <p>Subscription = recurring service plans</p>
              <p>Billing done:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Monthly / yearly / custom</li>
                <li>Auto-payment authorized</li>
              </ul>
              <p>Cancellation:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Effective next billing cycle</li>
                <li>No partial refunds</li>
              </ul>
              <p>Sevalink can:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Modify plans</li>
                <li>Stop subscription services</li>
              </ul>
            </div>
          </section>

          <section id="user-content" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">6. User Content</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                Sevalink may allow users to upload, post, share, or otherwise make available certain content, including but not limited to text, images, reviews, medical information, or feedback ("Content"). By submitting such Content, you grant Sevalink a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such Content for operational and promotional purposes.
              </p>
              <p>
                You represent and warrant that any Content provided by you does not violate any applicable laws, third-party rights, or intellectual property rights. Sevalink reserves the right to remove, modify, or restrict any Content at its sole discretion without prior notice.
              </p>
              <p>Users can upload:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Reviews</li>
                <li>Medical info</li>
                <li>Feedback</li>
              </ul>
              <p>Sevalink can:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Use content for platform improvement</li>
                <li>Remove content anytime</li>
              </ul>
              <p>Users must NOT post:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Illegal content</li>
                <li>False info</li>
                <li>Offensive material</li>
              </ul>
            </div>
          </section>

          <section id="governing-law" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">7. Governing Law</h2>
            <div className="mt-4 space-y-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Your use of the Sevalink platform may also be subject to applicable local, state, national, and international laws. By using the platform, you agree to comply with all such laws and regulations.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Governed by Indian law</li>
                <li>Applies to:</li>
                <li>Local laws</li>
                <li>National laws</li>
                <li>Users must comply with all applicable regulations</li>
              </ul>
            </div>
          </section>

          <section id="dispute-resolution" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">8. Dispute Resolution</h2>
            <div className="mt-4 space-y-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                In the event of any dispute, claim, or controversy arising out of or relating to the use of Sevalink services, the user agrees to first attempt to resolve the matter informally by contacting Sevalink's support team. If the dispute is not resolved within a reasonable period, it shall be referred to and resolved through binding arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996.
              </p>
              <p>
                The arbitration proceedings shall be conducted in Ahmedabad, Gujarat, in the English language. The decision of the arbitrator shall be final and binding on both parties. Subject to arbitration, the courts located in Ahmedabad, Gujarat shall have exclusive jurisdiction.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>First step - Contact Sevalink support</li>
                <li>If unresolved - Arbitration</li>
                <li>Law used:</li>
                <li>Arbitration Act (India)</li>
                <li>Location:</li>
                <li>Ahmedabad</li>
                <li>Decision:</li>
                <li>Final & binding</li>
                <li>Courts:</li>
                <li>Ahmedabad jurisdiction</li>
              </ul>
            </div>
          </section>

          <section id="limitation-of-liability" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">9. Limitation of Liability</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">9.1 Emergency Disclaimer & Limitation of Responsibility</h3>
            <div className="mt-3 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                Sevalink Healthcare Technologies Pvt. Ltd. ("Sevalink") operates solely as a technology-enabled aggregator platform that facilitates connections between Users and independent third-party healthcare service providers, including but not limited to doctors, hospitals, ambulance operators, diagnostic centers, and homecare professionals. Sevalink does not provide medical advice, diagnosis, treatment, or emergency healthcare services, and shall not be deemed to be a healthcare provider, medical institution, or emergency response authority under any applicable laws. All services made available through the Sevalink Platform are rendered independently by third-party Service Providers, and Sevalink does not exercise control over, nor does it supervise, endorse, or guarantee the quality, safety, legality, timeliness, or effectiveness of such services.
              </p>
              <p>
                Users expressly acknowledge and agree that the Platform is intended only as a facilitation and coordination tool and is not a substitute for professional medical judgment or official emergency response systems. In the event of any medical emergency, life-threatening condition, or urgent health concern, Users are strongly advised to immediately contact appropriate government emergency services or seek immediate assistance from the nearest hospital or qualified medical professional. Reliance solely on the Sevalink Platform in emergency situations may result in delays or unavailability of services, and Users accept full responsibility for such decisions.
              </p>
              <p>
                Sevalink does not guarantee the availability, response time, suitability, or performance of any Service Provider, including ambulance services, and shall not be held liable for any delays, cancellations, non-availability, or failure in service delivery arising from factors beyond its control, including but not limited to traffic conditions, geographical limitations, network failures, force majeure events, or actions and omissions of third-party Service Providers. While Sevalink strives to ensure a reliable and efficient user experience, it does not warrant uninterrupted, timely, or error-free operation of the Platform or Services.
              </p>
              <p>
                To the maximum extent permitted under applicable law, Sevalink shall not be responsible or liable for any injury, illness, deterioration of health, complications, medical negligence, or death arising out of or in connection with the use of the Platform or Services, including any reliance placed by Users on the availability or performance of such services. Users further acknowledge that all medical decisions, treatments, and outcomes are solely the responsibility of the respective Service Providers and the Users themselves, and Sevalink shall not be involved in or responsible for any clinical or medical judgment exercised during the course of service delivery.
              </p>
              <p>
                Sevalink shall also not be liable for any loss, damage, or harm resulting from incorrect, incomplete, or misleading information provided by the User, failure to follow medical advice, delay in seeking appropriate medical care, or misuse of the Platform. By accessing or using the Sevalink Platform, Users expressly confirm that they understand the limitations of the Services, particularly in emergency situations, and agree to use the Platform at their own risk. Users further agree that Sevalink's role is strictly limited to providing technological infrastructure and facilitation, and that Sevalink shall not be held liable, directly or indirectly, for any consequences arising from emergency or non-emergency use of the Platform.
              </p>
              <p>Users agree that use of the Platform, especially in emergency situations, is entirely at their own risk.</p>
              <p>Use of the Platform does not create any doctor-patient relationship between Sevalink and the User.</p>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">9.2 General Limitation of Liability</h3>
            <div className="mt-3 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                To the maximum extent permitted under applicable law, Sevalink Healthcare Technologies Pvt. Ltd. ("Sevalink"), including its directors, officers, employees, affiliates, partners, and service providers, shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Your access to, use of, or inability to use the Platform or Services</li>
                <li>Any delay, failure, interruption, or unavailability of Services</li>
                <li>Any medical advice, diagnosis, treatment, or services provided by third-party Service Providers</li>
                <li>Any errors, inaccuracies, or omissions in content or information available on the Platform</li>
                <li>Any unauthorized access to or use of your data or Account</li>
                <li>Any technical malfunction, system failure, network issue, or third-party integration failure</li>
                <li>Any loss of profits, revenue, data, goodwill, business opportunity, or anticipated savings</li>
                <li>Any personal injury, illness, or death arising from services booked through the Platform</li>
              </ul>
              <p>
                Sevalink operates solely as a technology aggregator platform facilitating connections between Users and independent Service Providers. Accordingly, Sevalinkdoes not assume any responsibility or liability for the quality, safety, legality, or outcomes of services rendered by such Service Providers, including but not limited to doctors, hospitals, ambulance operators, or homecare professionals.
              </p>
              <p>
                Notwithstanding anything to the contrary contained herein, the total aggregate liability of Sevalink, under any circumstances and for any claims arising out of or related to the use of the Platform or Services, shall be strictly limited to the amount actually paid by you to Sevalink for the specific Service giving rise to such claim, or INR 1,000 (Indian Rupees One Thousand only), whichever is lower.
              </p>
              <p>In cases where no payment has been made by you, Sevalink shall have no liability whatsoever.</p>
              <p>Sevalink shall not be liable for any damages or losses arising due to:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>User negligence or misuse of the Platform</li>
                <li>Incorrect or incomplete information provided by the User</li>
                <li>Failure to follow medical advice or instructions</li>
                <li>Delays caused by traffic, weather, force majeure events, or external circumstances beyond reasonable control</li>
              </ul>
              <p>
                Some jurisdictions may not allow certain limitations of liability. In such cases, Sevalink's liability shall be limited to the maximum extent permitted by applicable law.
              </p>
              <p>
                By using the Platform, you expressly acknowledge and agree that you are using the Services at your own risk, and that Sevalink's role is limited strictly to facilitation and technology support.
              </p>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">9.3 User Responsibility, Assumption of Risk & Indemnity</h3>
            <div className="mt-3 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                By accessing or using the Sevalink Platform, you expressly acknowledge, understand, and agree that you are using the Services voluntarily and entirely at your own risk. Sevalink Healthcare Technologies Pvt. Ltd. ("Sevalink") operates solely as a technology-enabled intermediary platform and shall not be held responsible for any acts, omissions, decisions, advice, services, or conduct of any third-party Service Providers or Users.
              </p>
              <p>
                You agree that Sevalink shall not be liable, directly or indirectly, for any loss, damage, injury, illness, deterioration of health, delay, inconvenience, financial loss, data loss, or death arising out of or in connection with:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Your use or inability to use the Platform or Services</li>
                <li>Any delay, failure, cancellation, or unavailability of services</li>
                <li>Any medical advice, diagnosis, treatment, or services provided by third-party Service Providers</li>
                <li>Any negligence, misconduct, error, or omission by Service Providers</li>
                <li>Any incorrect, incomplete, or misleading information provided by you or any third party</li>
                <li>Any technical issues, system failures, downtime, or network disruptions</li>
                <li>Any unauthorized access, data breach, or misuse of your Account</li>
                <li>Any force majeure events including but not limited to natural disasters, pandemics, strikes, or government actions</li>
              </ul>
              <p>
                You further agree to indemnify, defend, and hold harmless Sevalink, its directors, employees, affiliates, and partners from and against any and all claims, liabilities, damages, losses, costs, or expenses (including legal fees) arising out of or related to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Your use or misuse of the Platform</li>
                <li>Your violation of these Terms</li>
                <li>Your interaction with any Service Provider</li>
                <li>Any claims brought by third parties due to your actions</li>
              </ul>
              <p>
                Sevalink shall not be responsible for any consequences arising due to your failure to seek timely medical assistance, reliance on the Platform in emergency situations, or failure to follow professional medical advice.
              </p>
              <p>
                To the fullest extent permitted by applicable law, you agree that Sevalink's role is limited strictly to providing access to a digital platform, and that all risks associated with the use of Services are solely borne by you.
              </p>
              <p>
                Sevalink does not guarantee the availability of any Service at all times, locations, or situations, and services may be subject to provider availability, operational limitations, and external factors.
              </p>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">9.4 No Warranties</h3>
            <div className="mt-3 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                The Sevalink Platform and Services are provided on an "as is" and "as available" basis without any warranties of any kind, whether express or implied. Sevalink does not warrant that the Platform will be uninterrupted, secure, error-free, or free from viruses or harmful components, or that any defects will be corrected.
              </p>
              <p>
                Sevalink makes no representations or warranties regarding the accuracy, reliability, completeness, or availability of any content, services, or information provided through the Platform.
              </p>
            </div>
          </section>

          <section id="third-party-links" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">10. Links to Third-Party Websites & Services</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                The Sevalink Platform may contain links to third-party websites, applications, or services that are not owned, operated, or controlled by Sevalink Healthcare Technologies Pvt. Ltd. ("Sevalink"). These links may include, but are not limited to, payment gateways, hospital or clinic websites, diagnostic platforms, map/navigation services, communication tools, and other external integrations.
              </p>
              <p>You acknowledge and agree that Sevalink has no control over and assumes no responsibility or liability for:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>The content, accuracy, or completeness of any third-party websites or services</li>
                <li>The privacy policies, data handling practices, or security measures of such third parties</li>
                <li>The availability, reliability, or functionality of such external platforms</li>
                <li>Any transactions, interactions, or communications between you and such third parties</li>
              </ul>
              <p>
                Your access to and use of any third-party websites or services is entirely at your own risk, and you are advised to review their respective terms, conditions, and privacy policies before engaging with them.
              </p>
              <p>
                Sevalink shall not be liable, directly or indirectly, for any loss, damage, liability, or harm arising out of or in connection with:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Your use of or reliance on any content, products, or services available through third-party links</li>
                <li>Any failure, delay, or disruption caused by such third-party services</li>
                <li>Any unauthorized use, data breach, or misuse of your information by third parties</li>
                <li>Any disputes, claims, or issues arising between you and any third-party provider</li>
              </ul>
              <p>
                The inclusion of any third-party links on the Platform does not imply endorsement, sponsorship, or recommendation by Sevalink of such entities or their services.
              </p>
              <p>
                Sevalink reserves the right to add, remove, or modify third-party links or integrations at its sole discretion, without prior notice.
              </p>
            </div>
          </section>

          <section id="changes-to-terms" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">11. Changes to Terms & Conditions</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                Sevalink Healthcare Technologies Pvt. Ltd. ("Sevalink") reserves the absolute right, at its sole discretion, to modify, update, amend, or replace these Terms and Conditions at any time, without prior approval from Users, in order to reflect changes in business practices, legal requirements, regulatory guidelines, or service offerings.
              </p>
              <p>
                Any such changes shall become effective immediately upon being published on the Platform, unless otherwise specified. For material changes that significantly affect User rights or obligations, Sevalink may, at its discretion, provide prior notice of at least 7 (seven) days through appropriate means, including but not limited to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>In-app notifications</li>
                <li>Email communication</li>
                <li>Website announcements</li>
              </ul>
              <p>
                However, the determination of what constitutes a "material change" shall be made solely by Sevalink, and Sevalink shall not be obligated to provide prior notice in all cases.
              </p>
              <p>
                It is your responsibility to periodically review these Terms to stay informed of any updates. Your continued access to or use of the Platform and Services after any modifications are posted shall constitute your acknowledgment and acceptance of the revised Terms.
              </p>
              <p>
                If you do not agree with any updated Terms, you must immediately discontinue the use of the Platform and may request account deactivation in accordance with applicable policies.
              </p>
              <p>
                Sevalink shall not be liable for any loss or inconvenience caused due to your failure to review updated Terms.
              </p>
            </div>
          </section>

          <section id="force-majeure" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">11.1 Force Majeure</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              Sevalink shall not be liable for any failure or delay in performance of its obligations due to events beyond its reasonable control, including but not limited to natural disasters, acts of God, pandemics, government actions, strikes, network failures, or technical disruptions.
            </p>
          </section>

          <section id="acknowledgment-acceptance" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">12. Acknowledgment & Acceptance of Terms</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                These Terms and Conditions constitute a legally binding agreement between you ("User", "You", or "Your") and Sevalink Healthcare Technologies Pvt. Ltd. (hereinafter referred to as "Sevalink", "Company", "We", "Us", or "Our"), governing your access to and use of the Sevalink mobile application, website, and all related services, including but not limited to ambulance booking, doctor appointments, telemedicine consultations, homecare services (such as doctor at home, nurse visits, physiotherapy, and caretakers), and any other healthcare facilitation services offered by Sevalink (collectively referred to as the "Service").
              </p>
              <p>
                By accessing, registering, or using any part of the Service, including through electronic means (such as clicking "I Agree" or similar actions), you expressly acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions, along with our Privacy Policy and Refund Policy, which together form an integral part of this agreement. If you do not agree with any part of these Terms, you must immediately discontinue the use of the Service.
              </p>
              <p>
                You further represent and warrant that you are at least 18 years of age and legally competent to enter into this agreement. In cases where the Service is used on behalf of another individual (such as a patient), you confirm that you are duly authorized to act on their behalf and accept these Terms accordingly.
              </p>
              <p>
                Sevalink operates as a technology-enabled healthcare aggregator platform, connecting users with independent third-party service providers including hospitals, clinics, doctors, ambulance operators, diagnostic centers, and homecare professionals. Sevalink does not provide medical advice, diagnosis, or treatment, and shall not be held responsible for the quality, accuracy, or outcome of services provided by such third-party providers.
              </p>
              <p>
                Your continued use of the Service is conditional upon your compliance with these Terms, applicable laws, and ethical usage of the Platform, and you agree that use of the Platform is at your own risk. Sevalink reserves the right, at its sole discretion, to suspend or terminate your access to the Service at any time, without prior notice, in case of any violation of these Terms, misuse of the platform, fraudulent activity, or behavior deemed harmful to the Company, its partners, or other users.
              </p>
              <p>
                We may update or modify these Terms from time to time to reflect changes in our services, legal requirements, or business practices. Any such changes shall become effective upon posting on the Platform, and your continued use of the Service after such updates shall constitute your acceptance of the revised Terms.
              </p>
              <p>Users agree to use the Platform in compliance with all applicable laws and regulations.</p>
            </div>
          </section>

          <section id="contact-us" className="pt-8 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">13. Contact Us</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              If you have any questions, concerns, or require clarification regarding these Terms and Conditions, you may contact Sevalink at:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>
                Email:{" "}
                <a className="text-red-700 hover:text-red-800 hover:underline underline-offset-4" href="mailto:support@sevalinkcare.com">
                  support@sevalinkcare.com
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
