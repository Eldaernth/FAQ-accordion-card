import React from 'react';

export default function FAQCard() {
  return (
    <div>
      <div>
        <img src="./images/bg-pattern-mobile.svg" alt="asd" />
        <img src="./images/illustration-woman-online-mobile.svg" alt="asd" />
      </div>
      <div>
        <h1>FAQ</h1>
        <ul>
          <li>
            How many team members can I invite? You can invite up to 2
            additional users on the Free plan. There is no limit on team members
            for the Premium plan.
          </li>{' '}
          <li>
            What is the maximum file upload size? No morse than 2GB. All files
            in your account must fit your allotted storage space.
          </li>
          <li>
            {' '}
            How do I reset my password? Click “Forgot password” from the login
            page or “Change password” from your profile page. A reset link will
            be emailed to you.
          </li>{' '}
          <li>
            Can I cancel my subscription? Yes! Send us a message and we’ll
            process your request no questions asked.
          </li>{' '}
          <li>
            Do you provide additional support? Chat and email support is
            available 24/7. Phone lines are open during normal business hours.
          </li>
        </ul>
      </div>
    </div>
  );
}
