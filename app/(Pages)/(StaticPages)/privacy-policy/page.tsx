"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Link as ScrollToLink } from "react-scroll";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PrivacyPolicyPage = () => {
  return (
    <section className="mb-10 flex w-full flex-col items-center gap-y-4 lg:items-start lg:gap-y-6">
      <div className="mx-auto mt-2 flex w-full max-w-screen-xl flex-col items-start px-4 sm:px-8 sm:text-xl lg:mt-0 lg:flex-row lg:px-12 2xl:px-0">
        <div className="flex w-full flex-col gap-3 pl-6 text-lg text-app-main sm:pl-10 lg:sticky lg:top-32 lg:ml-10 lg:h-screen lg:w-1/3 lg:p-5 lg:pl-0">
          <div className="text-xl font-semibold text-black">
            About QwikSavings.com
          </div>
          <Link
            href="/about-us"
            className="w-fit cursor-pointer text-start duration-300 hover:underline"
          >
            Our Company
          </Link>
          <Link
            href="/our-codes"
            className="w-fit cursor-pointer text-start duration-300 hover:underline"
          >
            Our Codes
          </Link>
          <Link
            href="/how-it-works"
            className="w-fit cursor-pointer text-start duration-300 hover:underline"
          >
            How it Works
          </Link>
          <Link
            href="/faqs"
            className="w-fit cursor-pointer text-start duration-300 hover:underline"
          >
            FAQ
          </Link>
          <Link
            href="/termsofservice"
            className="w-fit cursor-pointer text-start duration-300 hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="/contactus"
            className="w-fit cursor-pointer text-start duration-300 hover:underline"
          >
            Contact Us
          </Link>
        </div>
        <div className="mx-auto mt-6 w-full px-4 text-lg sm:px-8 sm:text-lg lg:mt-0 lg:px-12 xl:px-8 2xl:px-0">
          <h1 className="ml-2 text-xl font-bold sm:text-xl">
            Privacy Policy Of Qwik Savings
          </h1>
          <h2 className="ml-2 mt-2 text-lg font-semibold text-muted-foreground sm:text-lg">
            Last updated January 06, 2023
          </h2>

          <div className="mt-10 flex flex-col gap-2 lg:pl-2">
            <div className="text-start text-xl font-semibold text-black sm:text-xl">
              Introduction
            </div>
            <div className="text-start text-zinc-700 sm:text-justify">
              This policy is to make aware all the visitors of our site about
              what information we collect, use, and store provided by the user.
              By &apos;user&apos; or &apos;you/r&apos; we mean someone who uses
              our service. If you are accessing our site and using the service
              on behalf of a company or a legal entity, &apos;user&apos; or
              &apos;you/r&apos; is that company or legal entity in that case.
              Moreover, any gender words in one gender refer to all genders, and
              words in singular refer to plural and vice-versa.
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:pl-2">
            <div className="mt-4 text-start text-xl font-semibold text-black sm:text-xl">
              Privacy Notice
            </div>
            <div className="flex flex-col gap-3 hyphens-auto text-start text-zinc-700 sm:text-justify">
              <div>
                This privacy notice for QwikSavings (
                <span className="font-semibold">
                  “Company,” “we,” “us,” or “our“
                </span>
                ), describes how and why we might collect, store, use, and/or
                share (<span className="font-semibold">“process“</span>) your
                information when you use our services (
                <span className="font-semibold">“Services“</span>), such as when
                you:
              </div>

              <ul className="list-disc pl-10">
                <li>
                  Visit our website at{" "}
                  <Link
                    href="https://www.qwiksavings.com/"
                    target="_blank"
                    className="break-words text-app-main"
                  >
                    https://www.qwiksavings.com
                  </Link>{" "}
                  , or any website of ours that links to this privacy notice
                </li>
                <li>
                  Engage with us in other related ways, including any sales,
                  marketing, or events
                </li>
              </ul>
              <span className="font-semibold text-zinc-700">
                Questions or concerns?
              </span>
              <div>
                Reading this privacy notice will help you understand your
                privacy rights and choices. If you do not agree with our
                policies and practices, please do not use our Services. If you
                still have any questions or concerns, please contact us at{" "}
                <Link
                  href="mailto:contact@qwiksavings.com"
                  className="text-app-main sm:inline-block"
                >
                  contact@qwiksavings.com.
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:pl-2">
            <div className="text-lg font-semibold">Summary of Key Points</div>

            <span className="text-start font-semibold italic text-zinc-700 lg:text-justify">
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our table of
              contents below to find the section you are looking for. You can
              also click
              <ScrollToLink
                to="q"
                spy={true}
                smooth={true}
                offset={-150}
                duration={800}
                className="ml-1 cursor-pointer font-normal text-app-main"
              >
                here
              </ScrollToLink>{" "}
              to go directly to our table of contents.
            </span>

            <span className="text-start text-zinc-700 lg:text-justify">
              <span className="font-semibold">
                What personal information do we process?
              </span>{" "}
              When you visit, use, or navigate our Services, we may process
              personal information depending on how you interact with
              qwiksavings and the Services, the choices you make, and the
              products and features you use. Click{" "}
              <ScrollToLink
                to="q1"
                spy={true}
                smooth={true}
                offset={-150}
                duration={800}
                className="ml-1 cursor-pointer font-normal text-app-main"
              >
                here
              </ScrollToLink>{" "}
              to learn more
            </span>

            <span className="text-start text-zinc-700 lg:text-justify">
              <span className="font-semibold">
                Do we process any sensitive personal information?
              </span>
              We do not process sensitive personal information.
            </span>

            <span className="text-start text-zinc-700 lg:text-justify">
              <span className="font-semibold">
                Do we receive any information from third parties?
              </span>
              We do not receive any information from third parties.
            </span>

            <span className="text-start text-zinc-700 lg:text-justify">
              <span className="font-semibold">
                How do we process your information?
              </span>
              We process your information to provide, improve, and administer
              our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We may also process your
              information for other purposes with your consent. We process your
              information only when we have a valid legal reason to do so. Click{" "}
              <ScrollToLink
                to="q2"
                spy={true}
                smooth={true}
                offset={-150}
                duration={800}
                className="ml-1 cursor-pointer font-normal text-app-main"
              >
                here
              </ScrollToLink>{" "}
              to learn more.
            </span>

            <span className="text-start text-zinc-700 lg:text-justify">
              <span className="font-semibold">
                In what situations and with which parties do we share personal
                information?
              </span>
              We may share information in specific situations and with specific
              third parties. Click{" "}
              <ScrollToLink
                to="q4"
                spy={true}
                smooth={true}
                offset={-150}
                duration={800}
                className="ml-1 cursor-pointer font-normal text-app-main"
              >
                here
              </ScrollToLink>{" "}
              to learn more.
            </span>

            <span className="text-start text-zinc-700 lg:text-justify">
              <span className="font-semibold">
                How do we keep your information safe?
              </span>
              We have organizational and technical processes and procedures in
              place to protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Click{" "}
              <ScrollToLink
                to="q8"
                spy={true}
                smooth={true}
                offset={-150}
                duration={800}
                className="ml-1 cursor-pointer font-normal text-app-main"
              >
                here
              </ScrollToLink>{" "}
              to learn more.
            </span>

            <span className="text-start text-zinc-700 lg:text-justify">
              <span className="font-semibold">What are your rights?</span>
              Depending on where you are located geographically, the applicable
              privacy law may mean you have certain rights regarding your
              personal information. Click{" "}
              <ScrollToLink
                to="q9"
                spy={true}
                smooth={true}
                offset={-150}
                duration={800}
                className="ml-1 cursor-pointer font-normal text-app-main"
              >
                here
              </ScrollToLink>{" "}
              to learn more.
            </span>

            <span className="text-start text-zinc-700 lg:text-justify">
              <span className="font-semibold">
                How do you exercise your rights?
              </span>
              The easiest way to exercise your rights is by filling out our
              contact us form available on website, or by contacting us through
              email at{" "}
              <Link
                href="mailto:privacy@qwiksavings.com"
                className="text-app-main"
              >
                privacy@qwiksavings.com.
              </Link>{" "}
              We will consider and act upon any request in accordance with
              applicable data protection laws.
            </span>

            <span className="text-start text-zinc-700 lg:text-justify">
              Want to learn more about what qwiksavings does with any
              information we collect? Click{" "}
              <ScrollToLink
                to="q"
                spy={true}
                smooth={true}
                offset={-150}
                duration={800}
                className="ml-1 cursor-pointer font-normal text-app-main"
              >
                here
              </ScrollToLink>{" "}
              to review the notice in full.
            </span>
          </div>
          <div className="mt-10 flex  flex-col gap-10 lg:pl-2">
            <div
              className="text-start text-xl font-semibold text-black sm:text-xl"
              id="q"
            >
              TABLE OF CONTENTS
            </div>
            <ol className="ml-5 flex list-decimal flex-col justify-start gap-2 text-app-main">
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q1"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  WHAT INFORMATION DO WE COLLECT?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q2"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  HOW DO WE PROCESS YOUR INFORMATION?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q3"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                  INFORMATION?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q4"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q5"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q6"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q7"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  HOW LONG DO WE KEEP YOUR INFORMATION?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q8"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  HOW DO WE KEEP YOUR INFORMATION SAFE?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q9"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  WHAT ARE YOUR PRIVACY RIGHTS?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q10"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  CONTROLS FOR DO-NOT-TRACK FEATURES
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q11"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q12"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  DO WE MAKE UPDATES TO THIS NOTICE?
                </ScrollToLink>
              </li>
              <li className="cursor-pointer text-start duration-300 hover:underline">
                <ScrollToLink
                  to="q13"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </ScrollToLink>
              </li>
            </ol>
            <div className="flex flex-col gap-2 text-justify text-zinc-700">
              <span
                className="mt-4 text-start text-xl font-semibold text-black sm:text-xl"
                id="q1"
              >
                1. WHAT INFORMATION DO WE COLLECT?
              </span>
              <div className="flex flex-col gap-4">
                <span className="text-md font-semibold ">
                  Personal information you disclose to us
                </span>
                <span>
                  <span className="font-semibold italic text-zinc-700">
                    {" "}
                    In Short :{" "}
                  </span>
                  <i>
                    We collect personal information that you provide to us. We
                    collect personal information that you voluntarily provide to
                    us when you express an interest in obtaining information
                    about us or our products and Services, when you participate
                    in activities on the Services, or otherwise when you contact
                    us.
                  </i>
                </span>
                <span>
                  <span className="font-semibold text-zinc-700">
                    Personal Information Provided by You :{" "}
                  </span>
                  The personal information that we collect depends on the
                  context of your interactions with us and the Services, the
                  choices you make, and the products and features you use. The
                  personal information we collect may include the following:
                  <ul className=" mt-5 flex list-disc p-0 pl-4 flex-col gap-2">
                    <li>names</li>
                    <li>phone numbers</li>
                    <li>email addresses</li>
                  </ul>
                </span>
                <span>
                  <span className="font-semibold italic text-zinc-700">
                    Sensitive Information.
                  </span>
                  We do not process sensitive information.
                </span>
                <span>
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
                </span>
              </div>
              <div className="flex flex-col gap-4 text-zinc-700">
                <span className="text-md font-semibold ">
                  Information automatically collected
                </span>
                <span>
                  <span className="font-semibold italic text-zinc-700">
                    {" "}
                    In Short :{" "}
                  </span>{" "}
                  <i>
                    Some information — such as your Internet Protocol (IP)
                    address and/or browser and device characteristics — is
                    collected automatically when you visit our Services. We
                    automatically collect certain information when you visit,
                    use, or navigate the Services. This information does not
                    reveal your specific identity (like your name or contact
                    information) but may include device and usage information,
                    such as your IP address, browser and device characteristics,
                    operating system, language preferences, referring URLs,
                    device name, country, location, information about how and
                    when you use our Services, and other technical information.
                    This information is primarily needed to maintain the
                    security and operation of our Services, and for our internal
                    analytics and reporting purposes.
                  </i>
                </span>
                <span>
                  Like many businesses, we also collect information through
                  cookies and similar technologies.
                </span>
                <div className="flex flex-col gap-2">
                  <span>The information we collect includes:</span>
                  <ul className="ml-5 flex list-disc flex-col gap-2 italic">
                    <li>
                      Log and Usage Data. Log and usage data is service-related,
                      diagnostic, usage, and performance information our servers
                      automatically collect when you access or use our Services
                      and which we record in log files. Depending on how you
                      interact with us, this log data may include your IP
                      address, device information, browser type, and settings
                      and information about your activity in the Services(such
                      as the date/time stamps associated with your usage, pages
                      and files viewed, searches, and other actions you take
                      such as which features you use), device event information
                      (such as system activity, error reports (sometimes called
                      “crash dumps”), and hardware settings)
                    </li>
                    <li>
                      Device Data. We collect device data such as information
                      about your computer, phone, tablet, or other device you
                      use to access the Services. Depending on the device used,
                      this device data may include information such as your IP
                      address (or proxy server), device and application
                      identification numbers, location, browser type, hardware
                      model, Internet service provider and/or mobile carrier,
                      operating system, and system configuration information.
                    </li>
                    <li>
                      Location Data. We collect location data such as
                      information about your device&apos;s location, which can
                      be either precise or imprecise. How much information we
                      collect depends on the type and settings of the device you
                      use to access the Services. For example, we may use GPS
                      and other technologies to collect geolocation data that
                      tells us your current location (based on your IP address).
                      You can opt out of allowing us to collect this information
                      either by refusing access to the information or by
                      disabling your Location setting on your device. However,
                      if you choose to opt out, you may not be able to use
                      certain aspects of the Services.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-zinc-700">
            <span
              className="mt-4 text-start text-xl font-semibold text-black sm:text-xl"
              id="q2"
            >
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </span>
            <div className="flex flex-col gap-4">
              <span>
                <span className="font-semibold italic text-zinc-700">
                  {" "}
                  In Short :{" "}
                </span>
                <i>
                  {" "}
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent.
                </i>
              </span>
              <span className="font-semibold text-zinc-700">
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </span>
              <span>
                <span className="font-semibold text-zinc-700">
                  To save or protect an individual&apos;s vital interest.{" "}
                </span>
                We may process your information when necessary to save or
                protect an individual&apos;s vital interest, such as to prevent
                harm.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-zinc-700">
            <span
              className="mt-4 text-start text-xl font-semibold text-black sm:text-xl"
              id="q3"
            >
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </span>
            <div className="flex flex-col gap-4">
              <span>
                <span className="font-semibold italic text-zinc-700">
                  {" "}
                  In Short :{" "}
                </span>
                <i>
                  {" "}
                  We only process your personal information when we believe it
                  is necessary and we have a valid legal reason (i.e., legal
                  basis) to do so under applicable law, like with your consent,
                  to comply with laws, to provide you with services to enter
                  into or fulfill our contractual obligations, to protect your
                  rights, or to fulfill our legitimate business interests.
                </i>
              </span>
              <div className="flex flex-col gap-4">
                <span className="font-semibold italic text-zinc-700 underline">
                  If you are located in the EU or UK, this section applies to
                  you.
                </span>
                <span>
                  The General Data Protection Regulation (GDPR) and UK GDPR
                  require us to explain the valid legal bases we rely on in
                  order to process your personal information. As such, we may
                  rely on the following legal bases to process your personal
                  information:
                </span>
                <ul className="ml-5 flex list-disc flex-col gap-2">
                  <li>
                    <span>
                      <span className="font-semibold text-zinc-700">
                        Consent.{" "}
                      </span>
                      We may process your information if you have given us
                      permission (i.e., consent) to use your personal
                      information for a specific purpose. You can withdraw your
                      consent at any time. Click{" "}
                      <ScrollToLink
                        to="q2"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={800}
                        className="ml-1 cursor-pointer font-normal text-app-main"
                      >
                        here
                      </ScrollToLink>{" "}
                      to learn more.
                    </span>
                  </li>
                  <li>
                    <span>
                      <span className="font-semibold text-zinc-700">
                        Legal Obligations.{" "}
                      </span>
                      We may process your information where we believe it is
                      necessary for compliance with our legal obligations, such
                      as to cooperate with a law enforcement body or regulatory
                      agency, exercise or defend our legal rights, or disclose
                      your information as evidence in litigation in which we are
                      involved.
                    </span>
                  </li>
                  <li>
                    <span>
                      <span className="font-semibold text-zinc-700">
                        {" "}
                        Vital Interests.{" "}
                      </span>
                      We may process your information where we believe it is
                      necessary to protect your vital interests or the vital
                      interests of a third party, such as situations involving
                      potential threats to the safety of any person.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-semibold italic text-zinc-700 underline">
                  If you are located in Canada, this section applies to you.
                </span>
                <span>
                  We may process your information if you have given us specific
                  permission (i.e., express consent) to use your personal
                  information for a specific purpose, or in situations where
                  your permission can be inferred (i.e., implied consent). You
                  can withdraw your consent at any time. Click{" "}
                  <ScrollToLink
                    to="q2"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={800}
                    className="ml-1 cursor-pointer font-normal text-app-main"
                  >
                    here
                  </ScrollToLink>{" "}
                  to learn more.
                </span>
                <span>
                  In some exceptional cases, we may be legally permitted under
                  applicable law to process your information without your
                  consent, including, for example:
                </span>
                <ul className="ml-5 flex list-disc flex-col gap-2">
                  <li>
                    {" "}
                    If collection is clearly in the interests of an individual
                    and consent cannot be obtained in a timely way{" "}
                  </li>
                  <li>For investigations and fraud detection and prevention</li>
                  <li>
                    For business transactions provided certain conditions are
                    met
                  </li>
                  <li>
                    If it is contained in a witness statement and the collection
                    is necessary to assess, process, or settle an insurance
                    claim
                  </li>
                  <li>
                    For identifying injured, ill, or deceased persons and
                    communicating with next of kin
                  </li>
                  <li>
                    If we have reasonable grounds to believe an individual has
                    been, is, or may be victim of financial abuse
                  </li>
                  <li>
                    {" "}
                    If it is reasonable to expect collection and use with
                    consent would compromise the availability or the accuracy of
                    the information and the collection is reasonable for
                    purposes related to investigating a breach of an agreement
                    or a contravention of the laws of Canada or a province
                  </li>
                  <li>
                    {" "}
                    If disclosure is required to comply with a subpoena,
                    warrant, court order, or rules of the court relating to the
                    production of records
                  </li>
                  <li>
                    {" "}
                    If it was produced by an individual in the course of their
                    employment, business, or profession and the collection is
                    consistent with the purposes for which the information was
                    produced
                  </li>
                  <li>
                    {" "}
                    If the collection is solely for journalistic, artistic, or
                    literary purposes
                  </li>
                  <li>
                    {" "}
                    If the information is publicly available and is specified by
                    the regulations
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-zinc-700">
            <span
              className="mt-4 text-start text-xl font-semibold text-black sm:text-xl"
              id="q4"
            >
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </span>
            <div className="flex flex-col gap-4">
              <span>
                <span className="font-semibold italic text-zinc-700">
                  {" "}
                  In Short :{" "}
                </span>
                <i>
                  {" "}
                  We may share information in specific situations described in
                  this section and/or with the following third parties. We may
                  need to share your personal information in the following
                  situations:
                </i>
              </span>
              <ul className="ml-5 flex list-disc flex-col gap-2">
                <li>
                  <span>
                    <span className="font-semibold text-zinc-700">
                      Business Transfers.{" "}
                    </span>
                    We may share or transfer your information in connection
                    with, or during negotiations of, any merger, sale of company
                    assets, financing, or acquisition of all or a portion of our
                    business to another company.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 text-zinc-700"
            id="q5"
          >
            <span className="mt-4 text-start text-xl font-semibold text-black sm:text-xl">
              5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
            </span>
            <div className="flex flex-col gap-4">
              <span>
                <span className="font-semibold italic text-zinc-700">
                  {" "}
                  In Short :{" "}
                </span>
                <i>
                  We are not responsible for the safety of any information that
                  you share with third parties that we may link to or who
                  advertise on our Services, but are not affiliated with, our
                  Services.
                </i>
              </span>
              <span>
                The Services may link to third-party websites, online services,
                or mobile applications and/or contain advertisements from third
                parties that are not affiliated with us and which may link to
                other websites, services, or applications. Accordingly, we do
                not make any guarantee regarding any such third parties, and we
                will not be liable for any loss or damage caused by the use of
                such third-party websites, services, or applications. The
                inclusion of a link towards a third-party website, service, or
                application does not imply an endorsement by us. We cannot
                guarantee the safety and privacy of data you provide to any
                third parties. Any data collected by third parties is not
                covered by this privacy notice. We are not responsible for the
                content or privacy and security practices and policies of any
                third parties, including other websites, services, or
                applications that may be linked to or from the Services. You
                should review the policies of such third parties and contact
                them directly to respond to your questions.
              </span>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 text-zinc-700"
            id="q6"
          >
            <span className="mt-4 text-start text-xl font-semibold text-black sm:text-xl">
              6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </span>
            <div className="flex flex-col gap-4">
              <span>
                <span className="font-semibold italic text-zinc-700">
                  {" "}
                  In Short :{" "}
                </span>
                <i>
                  We may use cookies and other tracking technologies to collect
                  and store your information.
                </i>
              </span>
              <span>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to access or store information. Specific
                information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Notice.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-zinc-700">
            <span
              className="mt-4 text-start text-xl font-semibold text-black sm:text-xl"
              id="q7"
            >
              7. HOW LONG DO WE KEEP YOUR INFORMATION?
            </span>
            <div className="flex flex-col gap-4">
              <span>
                <span className="font-semibold italic text-zinc-700">
                  {" "}
                  In Short :{" "}
                </span>
                <i>
                  We keep your information for as long as necessary to fulfill
                  the purposes outlined in this privacy notice unless otherwise
                  required by law.
                </i>
              </span>
              <span>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements). When we
                have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-zinc-700">
            <span
              className="mt-4 text-start text-xl font-semibold text-black sm:text-xl"
              id="q8"
            >
              8. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </span>
            <div className="flex flex-col gap-4">
              <span>
                <span className="font-semibold italic text-zinc-700">
                  {" "}
                  In Short :{" "}
                </span>
                <i>
                  We aim to protect your personal information through a system
                  of organizational and technical security measures.
                </i>
              </span>
              <span>
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the Internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our Services is at your own risk. You should only
                access the Services within a secure environment.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-zinc-700">
            <span
              className="mt-4 text-start text-xl font-semibold text-black sm:text-xl"
              id="q9"
            >
              9. WHAT ARE YOUR PRIVACY RIGHTS?
            </span>
            <div className="flex flex-col gap-4">
              <span>
                <span className="font-semibold italic text-zinc-700">
                  {" "}
                  In Short :{" "}
                </span>
                <i>
                  In some regions, such as the European Economic Area (EEA),
                  United Kingdom (UK), and Canada, you have rights that allow
                  you greater access to and control over your personal
                  information.You may review, change, or terminate your account
                  at any time.
                </i>
              </span>
              <span>
                In some regions (like the EEA, UK, and Canada), you have certain
                rights under applicable data protection laws. These may include
                the right (i) to request access and obtain a copy of your
                personal information, (ii) to request rectification or erasure;
                (iii) to restrict the processing of your personal information;
                and (iv) if applicable, to data portability. In certain
                circumstances, you may also have the right to object to the
                processing of your personal information. You can make such a
                request by contacting us by using the contact details provided
                in the section{" "}
                <span className="cursor-pointer italic text-app-main hover:underline">
                  “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?”
                </span>{" "}
                below.
              </span>
              <span>
                We will consider and act upon any request in accordance with
                applicable data protection laws. If you are located in the EEA
                or UK and you believe we are unlawfully processing your personal
                information, you also have the right to complain to your local
                data protection supervisory authority. You can find their
                contact details here:
                <Link
                  href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                  target="_blank"
                  className="break-words text-app-main"
                  rel="noreferrer"
                >
                  https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                </Link>
              </span>
              <span>
                If you are located in Switzerland, the contact details for the
                data protection authorities are available here:
                <Link
                  href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                  target="_blank"
                  className="break-words text-app-main"
                  rel="noreferrer"
                >
                  https://www.edoeb.admin.ch/edoeb/en/home.html.
                </Link>
              </span>
              <span>
                <span className="font-semibold underline">
                  {" "}
                  Withdrawing your consent:
                </span>{" "}
                If we are relying on your consent to process your personal
                information, which may be express and/or implied consent
                depending on the applicable law, you have the right to withdraw
                your consent at any time. You can withdraw your consent at any
                time by contacting us by using the contact details provided in
                the section{" "}
                <span className="cursor-pointer italic text-app-main hover:underline">
                  {" "}
                  “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?”
                </span>{" "}
                below.
              </span>
              <span>
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal nor, when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
              </span>
              <span>
                <span className="font-semibold underline">
                  Opting out of marketing and promotional communications:
                </span>
                You can unsubscribe from our marketing and promotional
                communications at any time by clicking on the unsubscribe link
                in the emails that we send, or by contacting us using the
                details provided in the section{" "}
                <span className="cursor-pointer italic text-app-main hover:underline">
                  {" "}
                  “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?”
                </span>
                below. You will then be removed from the marketing lists.
                However, we may still communicate with you — for example, to
                send you service-related messages that are necessary for the
                administration and use of your account, to respond to service
                requests, or for other non-marketing purposes.
              </span>
              <span>
                <span className="font-semibold underline">
                  Cookies and similar technologies:
                </span>
                Most Web browsers are set to accept cookies by default. If you
                prefer, you can usually choose to set your browser to remove
                cookies and to reject cookies. If you choose to remove cookies
                or reject cookies, this could affect certain features or
                services of our Services.
              </span>
              <span
                className="whitespace-nowrap"
                style={{ whiteSpace: "normal" }}
              >
                If you have questions or comments about your privacy rights, you
                may email us at{" "}
                <Link
                  href="mailto:privacy@qwiksavings.com"
                  className="text-app-main"
                >
                  privacy@qwiksavings.com.
                </Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-zinc-700">
            <span
              className="mt-4 text-start text-xl font-semibold text-black sm:text-xl"
              id="q10"
            >
              10. CONTROLS FOR DO-NOT-TRACK FEATURES
            </span>
            <div className="flex flex-col gap-4">
              <span>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track (“DNT”) feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-zinc-700">
            <span
              className="mt-4 text-start text-xl font-semibold text-black sm:text-xl"
              id="q11"
            >
              11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </span>
            <div className="flex flex-col gap-5">
              <span>
                <span className="font-semibold italic text-zinc-700">
                  {" "}
                  In Short :{" "}
                </span>
                <i>
                  Yes, if you are a resident of California, you are granted
                  specific rights regarding access to your personal information.
                </i>
              </span>
              <span>
                California Civil Code Section 1798.83, also known as the “Shine
                The Light” law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below.
              </span>
              <span>
                If you are under 18 years of age, reside in California, and have
                a registered account with Services, you have the right to
                request removal of unwanted data that you publicly post on the
                Services. To request removal of such data, please contact us
                using the contact information provided below and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on the Services, but please be aware that the
                data may not be completely or comprehensively removed from all
                our systems (e.g., backups, etc.).
              </span>
              <span className="text-lg font-semibold ">
                CCPA Privacy Notice
              </span>

              <div className="flex flex-col gap-2">
                <span>
                  The California Code of Regulations defines a “resident” as:
                </span>
                <span className="ml-5">
                  (1) every individual who is in the State of California for
                  other than a temporary or transitory purpose and
                </span>
                <span className="ml-5">
                  (2) every individual who is domiciled in the State of
                  California who is outside the State of California for a
                  temporary or transitory purpose
                </span>
              </div>
              <span>All other individuals are defined as “non-residents.”</span>
              <span>
                If this definition of “resident” applies to you, we must adhere
                to certain rights and obligations regarding your personal
                information.
              </span>
            </div>
            <div className="tablebox flex flex-col gap-4">
              <span className="text-lg font-semibold text-zinc-700">
                What categories of personal information do we collect?
              </span>
              <span className="">
                We have collected the following categories of personal
                information in the past twelve (12) months:
              </span>
              <Table className="w-full border-black bg-popover">
                <TableHeader className="border border-black">
                  <TableRow className="border border-black text-center">
                    <TableHead className="w-[30%] border-l border-black lg:p-5">
                      Category
                    </TableHead>
                    <TableHead className="w-[50%] border-l border-black lg:p-5">
                      Examples
                    </TableHead>
                    <TableHead className="w-[20%] border-l border-black lg:p-5">
                      Collected
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="border border-black text-start">
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black lg:p-5">
                      A. Identifiers
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Contact details, such as real name, alias, postal address,
                      telephone or mobile contact number, unique personal
                      identifier, online identifier, Internet Protocol address,
                      email address, and account name
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      B. Personal information categories listed in the
                      California Customer Records statute
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Name, contact information, education, employment,
                      employment history, and financial information
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      C. Protected classification characteristics under
                      California or federal law
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Gender and date of birth
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      D. Commercial information
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Transaction information, purchase history, financial
                      details, and payment information
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      E. Biometric information
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Fingerprints and voiceprints
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      F. Internet or other similar network activity
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Browsing history, search history, online behavior,
                      interest data, and interactions with our and other
                      websites, applications, systems, and advertisements
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      G. Geolocation data
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Device location
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      H. Audio, electronic, visual, thermal, olfactory, or
                      similar information
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Images and audio, video or call recordings created in
                      connection with our business activities
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      I. Professional or employment-related information
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Business contact details in order to provide you our
                      Services at a business level or job title, work history,
                      and professional qualifications if you apply for a job
                      with us
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      J. Education Information
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Student records and directory information
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      K. Inferences drawn from other personal information
                    </TableCell>
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      Inferences drawn from any of the collected personal
                      information listed above to create a profile or summary
                      about, for example, an individual&apos;s preferences and
                      characteristics
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black">
                    <TableCell className="border-l border-black p-2 lg:p-5">
                      L. Sensitive Personal Information
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      -
                    </TableCell>
                    <TableCell className="border-l border-black p-2 text-center lg:p-5">
                      NO
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <span>
                We may also collect other personal information outside of these
                categories through instances where you interact with us in
                person, online, or by phone or mail in the context of:
              </span>
              <ul className="ml-5 flex list-disc flex-col gap-2">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>
                  Facilitation in the delivery of our Services and to respond to
                  your inquiries.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-semibold text-zinc-700">
                How do we use and share your personal information?
              </span>
              <span>
                More information about our data collection and sharing practices
                can be found in this privacy notice. You may contact us by email
                at{" "}
                <Link
                  href="mailto:privacy@qwiksavings.com"
                  className="text-app-main"
                >
                  privacy@qwiksavings.com.
                </Link>
                , or by referring to the contact details at the bottom of this
                document.
              </span>
              <span>
                If you are using an authorized agent to exercise your right to
                opt out we may deny a request if the authorized agent does not
                submit proof that they have been validly authorized to act on
                your behalf.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-semibold text-zinc-700">
                Will your information be shared with anyone else?
              </span>
              <span>
                We may disclose your personal information with our service
                providers pursuant to a written contract between us and each
                service provider. Each service provider is a for-profit entity
                that processes the information on our behalf, following the same
                strict privacy protection obligations mandated by the CCPA.
              </span>
              <span>
                We may use your personal information for our own business
                purposes, such as for undertaking internal research for
                technological development and demonstration. This is not
                considered to be “selling” of your personal information.
                CodeSpotr has not disclosed, sold, or shared any personal
                information to third parties for a business or commercial
                purpose in the preceding twelve (12) months. CodeSpotr will not
                sell or share personal information in the future belonging to
                website visitors, users, and other consumers.
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-lg font-semibold text-zinc-700">
                Your rights with respect to your personal data
              </span>
              <div className="flex flex-col gap-2">
                <span className="underline">
                  Right to request deletion of the data — Request to delete
                </span>
                <span>
                  You can ask for the deletion of your personal information. If
                  you ask us to delete your personal information, we will
                  respect your request and delete your personal information,
                  subject to certain exceptions provided by law, such as (but
                  not limited to) the exercise by another consumer of his or her
                  right to free speech, our compliance requirements resulting
                  from a legal obligation, or any processing that may be
                  required to protect against illegal activities
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="underline">
                  Right to be informed — Request to know
                </span>
                <span>
                  Depending on the circumstances, you have a right to know:
                </span>
                <ul className="ml-5 flex list-disc flex-col gap-2">
                  <li>whether we collect and use your personal information;</li>
                  <li>
                    the categories of personal information that we collect;
                  </li>
                  <li>
                    {" "}
                    the purposes for which the collected personal information is
                    used;
                  </li>
                  <li>
                    {" "}
                    whether we sell or share personal information to third
                    parties;
                  </li>
                  <li>
                    {" "}
                    the categories of personal information that we sold, shared,
                    or disclosed for a business purpose;
                  </li>
                  <li>
                    the categories of third parties to whom the personal
                    information was sold, shared, or disclosed for a business
                    purpose;
                  </li>
                  <li>
                    {" "}
                    the business or commercial purpose for collecting, selling,
                    or sharing personal information; and
                  </li>
                  <li>
                    the specific pieces of personal information we collected
                    about you.
                  </li>
                </ul>
                <span>
                  In accordance with applicable law, we are not obligated to
                  provide or delete consumer information that is de-identified
                  in response to a consumer request or to re-identify individual
                  data to verify a consumer request.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="underline">
                  Right to Non-Discrimination for the Exercise of a
                  Consumer&apos;s Privacy Rights
                </span>
                <span>
                  We will not discriminate against you if you exercise your
                  privacy rights.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="underline">
                  Right to Limit Use and Disclosure of Sensitive Personal
                  Informations
                </span>
                <span>
                  We do not process consumer&apos;s sensitive personal
                  information..
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="underline">Verification process</span>
                <span>
                  Upon receiving your request, we will need to verify your
                  identity to determine you are the same person about whom we
                  have the information in our system. These verification efforts
                  require us to ask you to provide information so that we can
                  match it with information you have previously provided us. For
                  instance, depending on the type of request you submit, we may
                  ask you to provide certain information so that we can match
                  the information you provide with the information we already
                  have on file, or we may contact you through a communication
                  method (e.g., phone or email) that you have previously
                  provided to us. We may also use other verification methods as
                  the circumstances dictate. We will only use personal
                  information provided in your request to verify your identity
                  or authority to make the request. To the extent possible, we
                  will avoid requesting additional information from you for the
                  purposes of verification. However, if we cannot verify your
                  identity from the information already maintained by us, we may
                  request that you provide additional information for the
                  purposes of verifying your identity and for security or
                  fraud-prevention purposes. We will delete such additionally
                  provided information as soon as we finish verifying you.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="underline">Other privacy rights</span>
                <ul className="ml-5 flex list-disc flex-col gap-2">
                  <li>
                    You may object to the processing of your personal
                    information.
                  </li>
                  <li>
                    You may request correction of your personal data if it is
                    incorrect or no longer relevant, or ask to restrict the
                    processing of the information.
                  </li>
                  <li>
                    You can designate an authorized agent to make a request
                    under the CCPA on your behalf. We may deny a request from an
                    authorized agent that does not submit proof that they have
                    been validly authorized to act on your behalf in accordance
                    with the CCPA.
                  </li>
                  <li>
                    You may request to opt out from future selling or sharing of
                    your personal information to third parties. Upon receiving
                    an opt-out request, we will act upon the request as soon as
                    feasibly possible, but no later than fifteen (15) days from
                    the date of the request submission.
                  </li>
                </ul>
              </div>
              <span>
                To exercise these rights, you can contact us by email at{" "}
                <Link
                  href="mailto:privacy@qwiksavings.com"
                  className="text-app-main"
                >
                  privacy@qwiksavings.com.
                </Link>
                , or by referring to the contact details at the bottom of this
                document. If you have a complaint about how we handle your data,
                we would like to hear from you.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-zinc-700">
            <span
              className="mt-4 text-start text-xl font-semibold text-black sm:text-xl"
              id="q12"
            >
              12. DO WE MAKE UPDATES TO THIS NOTICE?
            </span>
            <div className="flex flex-col gap-4">
              <span>
                <span className="font-semibold italic text-zinc-700">
                  {" "}
                  In Short :{" "}
                </span>
                <i>
                  Yes, we will update this notice as necessary to stay compliant
                  with relevant laws.
                </i>
              </span>
              <span>
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated “Revised” date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes to this privacy notice, we may
                notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy notice frequently to be informed of
                how we are protecting your information.
              </span>
            </div>
          </div>
          <div
            className="mb-10 flex flex-col gap-2 text-zinc-700"
            id="q13"
          >
            <span className="mt-4 text-start text-xl font-semibold text-black sm:text-xl">
              13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </span>
            <div className="flex flex-col gap-4">
              <span
                className="whitespace-nowrap"
                style={{ whiteSpace: "normal" }}
              >
                If you have questions or comments about this notice, you may
                email us at{" "}
                <Link
                  href="mailto:contact@qwiksavings.com"
                  className="text-app-main"
                >
                  privacy@qwiksavings.com.
                </Link>
              </span>
            </div>
          </div>
          <span className="text-lg font-semibold sm:text-lg lg:text-2xl">
            Note: We do not have control over the privacy policy of all the
            sites listed on our website. Once you leave our site and browse the
            store or service listed on our website they will use information in
            accordance with their privacy policy. So we request you to check the
            privacy policy of any store or service website you visit from our
            website.
          </span>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
