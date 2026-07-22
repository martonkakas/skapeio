import Dialog from '@/components/Dialog';

const classNames = {
  section: 'space-y-2',
  heading: 'font-bold opacity-75 text-lg',
  text: 'opacity-80',
  list: 'list-disc pl-5 space-y-1 opacity-80',
  link: 'underline underline-offset-4 hover:opacity-100'
};

const PrivacyPolicyDialog = () => (
  <Dialog
    id="privacy-policy"
    title="Privacy Policy"
  >
    <p className="font-mono text-xs uppercase tracking-widest opacity-50">
      Effective date: 22 July 2026
    </p>

    <section className={classNames.section}>
      <h3 className={classNames.heading}>1. Who controls your data</h3>
      <p className={classNames.text}>
        This notice applies to the website skape.io. The data controller is:
      </p>
      <address className="not-italic opacity-80">
        <strong>skape.io Kft.</strong><br />
        1092 Budapest, Erkel u. 13/A, Hungary<br />
        <a className={classNames.link} href="mailto:hello@skape.io">
          hello@skape.io
        </a>
      </address>
    </section>

    <section className={classNames.section}>
      <h3 className={classNames.heading}>2. What this website does</h3>
      <p className={classNames.text}>
        This is an informational company website. It has no user accounts,
        contact forms, newsletter, comments, online shop or payment function.
        We do not use your data for advertising, profiling or automated
        decision-making.
      </p>
    </section>

    <section className={classNames.section}>
      <h3 className={classNames.heading}>3. Website delivery and security</h3>
      <p className={classNames.text}>
        The website is hosted by Vercel Inc. When you visit it, technical data
        required to deliver and protect the website may be processed, including
        your IP address, request date and time, requested URL, browser and device
        information, response status and security-related request data.
      </p>
      <p className={classNames.text}>
        The purpose is to provide the website, maintain its security, prevent
        abuse and diagnose technical errors. To the extent this involves
        personal data, the legal basis is our legitimate interest under Article
        6(1)(f) GDPR in operating a secure and reliable website. We do not export
        or maintain a separate copy of Vercel&apos;s technical request logs. They are
        retained according to the applicable Vercel service settings and only
        for as long as needed for these purposes.
      </p>
    </section>

    <section className={classNames.section}>
      <h3 className={classNames.heading}>4. Anonymous website analytics</h3>
      <p className={classNames.text}>
        We use Vercel Web Analytics to understand aggregate visitor numbers and
        how the website is used. It may process the time of a visit, page and
        route viewed, referrer, filtered query parameters, approximate location,
        browser, operating system and device type.
      </p>
      <p className={classNames.text}>
        Vercel Web Analytics does not use cookies and does not associate an
        analytics event with your name, email address or stored IP address. A
        hash derived from the incoming request is used to distinguish visitors
        for one day and is then discarded. We do not use custom analytics events
        or combine analytics with information from other sources.
      </p>
      <p className={classNames.text}>
        The purpose is to measure the reach and basic performance of the
        website. To the extent the processing is subject to the GDPR, the legal
        basis is our legitimate interest under Article 6(1)(f) GDPR in measuring
        and improving our website with minimal impact on visitors. Analytics
        reports are retained according to the reporting window of our Vercel
        plan. Because the reports are anonymous and aggregated, we cannot use
        them to identify you or retrieve an individual visit.
      </p>
      <p className={classNames.text}>
        More information is available in Vercel&apos;s{' '}
        <a
          className={classNames.link}
          href="https://vercel.com/docs/analytics/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Analytics privacy documentation
        </a>.
      </p>
    </section>

    <section className={classNames.section}>
      <h3 className={classNames.heading}>5. Contacting us by email</h3>
      <p className={classNames.text}>
        The email links on this website open your own email application. Merely
        clicking a link does not send personal data to us. If you email us, we
        process the information you provide, such as your name, email address,
        message, signature and attachments, in order to answer you and handle
        your request.
      </p>
      <p className={classNames.text}>
        The legal basis is Article 6(1)(b) GDPR where your message concerns steps
        before entering into, or performing, a contract. For other enquiries, it
        is our legitimate interest under Article 6(1)(f) GDPR in conducting and
        documenting business correspondence. General enquiries are normally
        deleted no later than 12 months after the matter is closed. If a message
        relates to a contract, legal claim or statutory obligation, it may be
        retained for the applicable legal retention period.
      </p>
    </section>

    <section className={classNames.section}>
      <h3 className={classNames.heading}>6. Cookies and similar storage</h3>
      <p className={classNames.text}>
        This website does not set or use cookies, local storage or session
        storage. It does not contain advertising pixels or embedded third-party
        media. Consequently, there are no cookie preferences to configure.
      </p>
    </section>

    <section className={classNames.section}>
      <h3 className={classNames.heading}>7. Recipients and international transfers</h3>
      <p className={classNames.text}>
        Personal data is disclosed only where necessary to service providers
        supporting our hosting, communications and IT operations, to professional
        advisers, or to public authorities where required by law. Vercel Inc. is
        based in the United States. Where data is transferred outside the
        European Economic Area, we use the safeguards applicable to the relevant
        provider and service, including adequacy decisions or the European
        Commission&apos;s Standard Contractual Clauses where applicable.
      </p>
      <p className={classNames.text}>
        See Vercel&apos;s{' '}
        <a
          className={classNames.link}
          href="https://vercel.com/legal/privacy-notice"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Notice
        </a>{' '}
        and{' '}
        <a
          className={classNames.link}
          href="https://vercel.com/legal/dpa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Processing Addendum
        </a>.
      </p>
    </section>

    <section className={classNames.section}>
      <h3 className={classNames.heading}>8. Your rights</h3>
      <p className={classNames.text}>
        Subject to the conditions of the GDPR, you may request access to,
        rectification or erasure of your personal data, restriction of
        processing, data portability, or object to processing based on legitimate
        interests. These rights may be limited where we cannot identify you in
        anonymous analytics data or where retention is required by law.
      </p>
      <p className={classNames.text}>
        To exercise your rights, email{' '}
        <a className={classNames.link} href="mailto:hello@skape.io">
          hello@skape.io
        </a>. We may ask for information needed to verify your identity and will
        normally respond within one month.
      </p>
    </section>

    <section className={classNames.section}>
      <h3 className={classNames.heading}>9. Complaints</h3>
      <p className={classNames.text}>
        You may lodge a complaint with the Hungarian National Authority for Data
        Protection and Freedom of Information (NAIH): 1055 Budapest, Falk Miksa
        utca 9-11; postal address: 1363 Budapest, Pf. 9;{' '}
        <a
          className={classNames.link}
          href="https://www.naih.hu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          naih.hu
        </a>;{' '}
        <a className={classNames.link} href="mailto:ugyfelszolgalat@naih.hu">
          ugyfelszolgalat@naih.hu
        </a>. You also have the right to seek a judicial remedy.
      </p>
    </section>

    <section className={classNames.section}>
      <h3 className={classNames.heading}>10. Changes to this notice</h3>
      <p className={classNames.text}>
        We may update this notice if the website, our providers or legal
        requirements change. The current version and its effective date will
        always be available here.
      </p>
    </section>
  </Dialog>
);

export default PrivacyPolicyDialog;
