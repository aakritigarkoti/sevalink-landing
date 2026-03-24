import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "scope-of-services", label: "1. Scope of Services" },
  { id: "cancellation-policy", label: "2. Cancellation Policy" },
  { id: "service-fees-charges", label: "3. Service Fees & Charges" },
  { id: "partial-refund-eligibility", label: "4. Partial Refund Eligibility" },
  { id: "non-refundable-cases", label: "5. Non-Refundable Cases" },
  { id: "refund-processing-time", label: "6. Refund Processing Time" },
  { id: "unforeseeable-circumstances", label: "7. Unforeseeable Circumstances/ Force Majeure" },
  { id: "limitation-of-liability", label: "8. Limitation of Liability" },
  { id: "user-accountability", label: "9. User Accountability" },
  { id: "governing-law-jurisdiction", label: "10. Governing Law & Jurisdiction" },
  { id: "contact-support", label: "11. Contact Support" },
  { id: "additional-terms", label: "12. Additional Terms & Legal Protection" },
  { id: "acknowledgment", label: "Acknowledgment" },
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <ScrollToTop />
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <article className="rounded-2xl border border-[#DC262620] bg-white/85 p-6 sm:p-10 md:p-12 shadow-sm">
          <header className="pb-8 border-b border-black/10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Refund Policy</h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600">Last Updated: March 24, 2026</p>
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

          <section id="introduction" className="pt-10 pb-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                Customer Cancellation &amp; Refund Policy
              </p>
              <p>
                This policy establishes the terms and conditions governing cancellations, refund eligibility, applicable service charges, and limitations of liability in connection with ambulance bookings facilitated through Sevalink. By accessing, booking, or utilizing any services via the platform, you expressly acknowledge, understand, and agree to be legally bound by these terms. All services are provided on a best-effort basis, and Sevalink shall not be held liable for any delays, unavailability, service interruptions, or any direct, indirect, incidental, or consequential damages arising from the use of the platform. Users avail services at their own risk and discretion.
              </p>
            </div>
          </section>

          <section id="scope-of-services" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">1. Scope of Services</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              "Sevalink is a technology platform that facilitates connections between users and independent ambulance drivers, medical transport providers, and healthcare service partners. Sevalink does not own, operate, or control any ambulance services or medical personnel and is not a healthcare or emergency medical service provider. Any medical assistance, treatment, or procedures carried out during transport are the sole responsibility of the respective service provider. Sevalink shall not be liable for the quality, outcome, or execution of any medical or transport services provided."
            </p>
          </section>

          <section id="cancellation-policy" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">2. Cancellation Policy</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">2.1 Before Driver Assignment</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Cancellation of a booking is permitted without penalty prior to the assignment of an ambulance driver. Any payment made shall be eligible for a refund, subject to deduction of applicable payment gateway fees, transaction charges, or processing costs.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">2.2 After Driver Assignment</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Once an ambulance driver has been assigned to the booking, the advance amount and/or booking amount shall become strictly non-refundable.
            </p>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              This non-refundability applies in all cases where cancellation is initiated by the user for reasons including, but not limited to, change of plans, alternative arrangements, delay or unavailability of the patient, or any other reasons not attributable to Sevalink or the service provider.
            </p>
          </section>

          <section id="service-fees-charges" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">3. Service Fees &amp; Charges</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">3.1 Platform Commission</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Sevalink charges a platform service commission ranging between 10% to 15% of the total booking value for facilitating ambulance and medical transport services.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">3.2 Fee Applicability</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              This commission is deemed earned and becomes non-refundable once an ambulance driver has been successfully assigned and the booking is confirmed/reserved on the platform.
            </p>
          </section>

          <section id="partial-refund-eligibility" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">4. Partial Refund Eligibility</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">4.1 Refund Calculation</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              In cases where the total amount paid by the user exceeds Sevalink's applicable service fee, a partial refund may be processed in accordance with the following formula:
            </p>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base font-medium">
              Refundable Amount = Total Amount Paid - (Service Fee + Driver Charges + Transaction Charges + Third-Party Fees)
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">4.2 Non-Refundable Charges</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              All payment gateway charges, banking fees, convenience fees, and any third-party expenses incurred during the booking process shall be strictly non-refundable under all circumstances.
            </p>
          </section>

          <section id="non-refundable-cases" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">5. Non-Refundable Cases</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              Refunds shall not be applicable under the following circumstances:
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">5.1 Post-Assignment Cancellation</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Cancellation initiated after an ambulance driver has been assigned, for any personal or non-service-related reasons.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">5.2 Mid-Journey Termination</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              If the journey or service is voluntarily stopped, cancelled, or discontinued by the user after commencement.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">5.3 Misuse of Services</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              In cases involving false, misleading, fraudulent, or non-genuine emergency bookings, or any misuse of the platform or services.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">5.4 Repeated Cancellations</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Where repeated cancellations by the user result in unnecessary blocking, wastage, or unavailability of ambulance resources.
            </p>
          </section>

          <section id="refund-processing-time" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">6. Refund Processing Time</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">6.1 Processing Timeline</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              All approved refunds shall be processed within 5-7 working days from the date of approval.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">6.2 Credit of Refund</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              The refunded amount shall be credited to the original payment method used at the time of booking. The actual credit timeline may vary depending on the policies of the respective bank, payment gateway, or financial institution.
            </p>
          </section>

          <section id="unforeseeable-circumstances" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">7. Unforeseeable Circumstances/ Force Majeure</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">7.1 Limitation of Liability</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Sevalink shall not be held liable for any delays, service interruptions, cancellations, or failure to perform its obligations arising from events beyond its reasonable control.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">7.2 Covered Events</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Such events include, but are not limited to, natural disasters, acts of God, traffic conditions or restrictions, governmental actions or orders, strikes, lockouts, accidents, public disturbances, technical failures, or unforeseen medical emergencies.
            </p>
          </section>

          <section id="limitation-of-liability" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">8. Limitation of Liability</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">8.1 Liability Cap</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              To the maximum extent permitted under applicable law, Sevalink's total and aggregate liability arising out of or in connection with any booking or use of the platform shall be strictly limited to the service fee actually received by Sevalink for the respective booking.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">8.2 Exclusion of Damages</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Sevalink shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages, including but not limited to loss of life, personal injury, delay, loss of opportunity, loss of data, or financial loss arising from the use of the platform or services.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">8.3 Third-Party Services Disclaimer</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              All ambulance and medical transport services are provided by independent third-party service providers. Sevalink does not control, supervise, or guarantee the quality, safety, timeliness, legality, or suitability of such services and shall not be held liable for any acts, omissions, negligence, or misconduct of such providers.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">8.4 User Responsibility</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Users acknowledge that they are availing services at their own risk and discretion. Sevalink shall not be responsible for any decisions made by users before, during, or after the use of the platform.
            </p>
          </section>

          <section id="user-accountability" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">9. User Accountability</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">9.1 User Indemnity Obligation</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Users agree to indemnify, defend, and hold harmless Sevalink, its founders, directors, employees, affiliates, and partners from and against any and all claims, demands, liabilities, damages, losses, costs, or expenses (including legal fees) arising out of or in connection with their use or misuse of the platform.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">9.2 Scope of Indemnity</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              This includes, but is not limited to, claims arising from false or misleading emergency requests, fraudulent activity, misuse of services, violation of applicable laws, or breach of these terms and conditions.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">9.3 Continuing Obligation</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              This indemnification obligation shall survive the termination, suspension, or expiration of the user's access to the platform.
            </p>
          </section>

          <section id="governing-law-jurisdiction" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">10. Governing Law &amp; Jurisdiction</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">10.1 Governing Law</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              These terms and any disputes arising out of or in connection with the use of Sevalink's platform shall be governed by and construed in accordance with the laws of India.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">10.2 Jurisdiction</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              All disputes shall be subject to the exclusive jurisdiction of the competent courts located in the city where Sevalink is registered.
            </p>
          </section>

          <section id="contact-support" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">11. Contact Support</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">11.1 Support Requests</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              For any refund-related queries, concerns, or review requests, users must contact Sevalink support through the in-app Help section or other officially designated support channels.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">11.2 Case Evaluation</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              All requests shall be assessed on a case-by-case basis at the sole discretion of Sevalink. The decision made by Sevalink in such matters shall be final, binding, and not subject to further dispute.
            </p>
          </section>

          <section id="additional-terms" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">12. Additional Terms &amp; Legal Protection</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">12.1 No Warranty</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Sevalink provides its platform and services on an "as is" and "as available" basis without any warranties of any kind, whether express or implied, including but not limited to availability, accuracy, reliability, or fitness for a particular purpose.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">12.2 Service Availability</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Sevalink does not guarantee uninterrupted or error-free operation of the platform and may suspend, modify, or discontinue services at any time without prior notice.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">12.3 User Responsibility &amp; Risk Acknowledgment</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Users acknowledge and agree that they are availing services at their own risk and discretion. Sevalink shall not be responsible for any consequences arising from user decisions before, during, or after the use of the platform.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">12.4 Account Suspension or Termination</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Sevalink reserves the right to suspend or terminate user access to the platform at its sole discretion in cases of misuse, fraudulent activity, or violation of these terms, without prior notice or liability.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">12.5 Modification of Policy</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Sevalink reserves the right to update, modify, or revise this policy at any time. Continued use of the platform after such changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section id="acknowledgment" className="pt-8 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">Acknowledgment</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              "By accessing or using Sevalink's services, you acknowledge that you have read, understood, and expressly agree to be bound by this policy and its terms."
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
