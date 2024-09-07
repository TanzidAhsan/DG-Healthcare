import React from 'react';
import './TermsAndCondition.css';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import Footer from '../components/Footer'; // Adjust the path as needed


const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      <div className="tnc-container">
        <header className="tnc-header">
          <h1>Terms and Conditions</h1>
          <p className="tnc-introduction">Welcome to the official platform of DG e-Pharma.</p>
        </header>
        <section className="tnc-content">
          <h2>Introduction</h2>
          <p>
            Welcome to the official platform of DG e-Pharma. By using the Platform, any natural or legal person (the “User” or “You”) hereby agrees that they have read these Terms and Conditions (the “Terms and Conditions”) carefully and accept to be bound by the Terms and Conditions and represent that they agree to comply with these Terms and Conditions. If any User does not agree to all of the Terms and Conditions, he or she will not be able to access the Platform or avail any of its services.
          </p>
          <p>
            The Terms and Conditions are deemed effective upon the use of the Platform, which signifies the User's acceptance of these Terms and Conditions. If any User does not want to be bound by the Terms and Conditions, such User must not subscribe to or use the Platform or the services provided by the Platform.
          </p>

          <h2>Registration</h2>
          <p>
            You will need to register for a DG e-Pharma Account (the “Pharmacy App”) to use the Platform. For the registration process, it requires some information/documents including trade license, DGDA license, BIN number, TIN number, email address, phone number, and password.
          </p>
          <p>
            By registering and making use of the services, You attest that You are at least 18 (eighteen) years old, You are not legally prohibited from entering into contracts, You have read and accepted the Terms and Conditions posted on the Platform, and the information You submitted during the registration process is accurate and complete. You pledge to quickly update Your registration information if anything changes.
          </p>
          <p>
            The Company may at any time in its sole and absolute discretion, invalidate, close, revoke, block, etc., the Account of any User without giving any reason or prior notice.
          </p>
          <p>
            The User hereby gives unrestricted consent and legal authority to the Company to handle, share, store, access, process, etc. of the User's information (personal and/or business information), which were provided during the registration of the Account or anytime thereafter.
          </p>
          <p>
            The User grants the Company an unrestricted right to disclose to third parties the User's information (personal and/or business information).
          </p>

          <h2>Accessing the Site</h2>
          <p>
            The Company grants the User a non-transferable, revocable, and non-exclusive license to use the Site, in accordance with the Terms and Conditions described herein, for the purposes of purchasing the goods as well as to obtain any service as provided in the Site.
          </p>
          <p>
            If the User is registering an Account for and on behalf of an establishment/business entity, the User represents that they have the authority to bind that establishment/business entity to the Terms and Conditions. The Company may require such User to provide any documentary proof showing the authorization of such establishment/business entity.
          </p>
          <p>
            No natural or legal person shall register an Account with the Site more than once unless approved in writing by the Company. The email ID and/or phone number of the User cannot be used more than once for opening an Account, and the Company shall have the ultimate discretion to cancel, block, suspend, etc., any Account in this regard.
          </p>
          <p>
            Access to the Site may occasionally/temporarily be suspended or restricted for the purpose of repairing, maintenance, technical or business reasons or for the introduction of new facilities or services at any time, without prior notice. The Company reserves the right to give push notifications in this regard.
          </p>

          <h2>Responsibilities of the User</h2>
          <p>
            The User acknowledges and undertakes to access the Site and transact at his/her own risk and shall use his/her best and prudent judgment before entering into any transactions through the Site.
          </p>
          <p>
            The User acknowledges and undertakes that he or she is accessing the Site with his or her free will and without fraud, duress, undue influence or coercion of any kind or nature whatsoever from the Company or any other party.
          </p>
          <p>
            The User shall not engage in activities that could harm or potentially harm the Site, the Company, its employees, officers, representatives, stakeholders or any other party directly or indirectly associated with the Company or access to it to be interrupted, damaged or impaired in any way.
          </p>
          <p>
            The User shall be responsible for all electronic communications and content sent from their device to the Site and the Company.
          </p>
          <p>
            The User shall use the Site for lawful purposes only.
          </p>
          <p>
            The User shall be strictly prohibited from using the Site for fraudulent purposes, or in connection with a criminal offense or other unlawful activity. Any suspected unlawful or fraudulent activity will result in immediate cancellation of the Account and/or may also result in legal action by the Company.
          </p>
          <p>
            The User shall be responsible for maintaining the confidentiality of the details of their Account. The User shall ensure that the Account and its related details are maintained securely at all times and all necessary steps are taken to prevent misuse thereof. The User shall inform the Company immediately if there is reason to believe that the password to the Account has become known to any third party, or if the password is being, or is likely to be, used in an unauthorized manner.
          </p>
          <p>
            The User is under an obligation to ensure that the information provided to the Company is correct and complete at all times. The User shall update details in their Account regularly. The Company may at any time, at its sole and absolute discretion, request updating of information to any User.
          </p>
          <p>
            The User shall not use any false information to access the Site or impersonate others or otherwise mislead the Company or third parties in any way whatsoever.
          </p>
          <p>
            The User shall be bound to comply with the Terms and Conditions, despite having ordered the goods from the Site for or on behalf of any third party(s).
          </p>

          <h2>Account Deletion and Restriction</h2>
          <p>
            To delete Your Account, please send us an email. Your use of the Platform and/or Your Account may be restricted, suspended, or terminated by us if we have reasonable suspicion that You are:
          </p>
          <ul>
            <li>publishing any content that violates any intellectual property rights, privacy, publicity, trade secret, or other rights;</li>
            <li>publishing content that is deemed by DG e-Pharma in its sole discretion to be illegal, obscene, defamatory, slanderous, threatening, harassing, violent, hateful, or discouraging to any other person or entity;</li>
            <li>publishing anything that, in DG e-Pharma's sole discretion, qualifies as cyberbullying;</li>
            <li>posting any malicious HTML code/link to the Platform that carries security risk;</li>
            <li>publishing anything that DG e-Pharma, at its sole discretion, deems to be "spam";</li>
            <li>posing as someone else when uploading/inserting content/information;</li>
            <li>gathering data about other people, including email addresses, in any way and without their permission;</li>
            <li>permitting any other individual or organization to view or post comments using Your identity;</li>
            <li>intimidating, frightening or mistreating any user of the Platform;</li>
            <li>participating in any other activity that prevents someone else from accessing or using the Site. Also, exposes any kind of information of DG e-Pharma or its vendors, customers or any others entities without the permission of DG e-Pharma.</li>
            <li>encouraging other persons to engage in any unlawful conduct.</li>
          </ul>

          {/* Continue to add the rest of the content in a similar format */}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
