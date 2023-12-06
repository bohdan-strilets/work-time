import { Title, Date, List, Accent } from './TermsUseSite.styled';

const TermsUseSite: React.FC<{}> = () => {
  return (
    <>
      <Title>Terms of Use for WorkTime</Title>
      <Date>
        Last Updated: <Accent>06.01.2023</Accent>
      </Date>
      <Title>User Registration and Account</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>
            To access the full features of WorkTime, users must complete the registration process,
            providing accurate and current information.
          </p>
        </li>
        <li>
          <p>
            Users are responsible for maintaining the confidentiality of their account credentials
            and for all activities occurring under their account.
          </p>
        </li>
      </List>
      <Title>Purpose of the Service</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>
            WorkTime is intended for personal use in tracking work hours and managing shifts
            efficiently.
          </p>
        </li>
        <li>
          <p>
            Users agree not to misuse the service, including but not limited to unauthorized access,
            interference with the functionality, or any activity that may disrupt the service.
          </p>
        </li>
      </List>
      <Title>Notifications</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>
            Users may receive notifications related to their use of WorkTime. These notifications
            are integral to the functionality of the service.
          </p>
        </li>
        <li>
          <p> Users can manage their notification preferences within the application.</p>
        </li>
      </List>
      <Title>Data Management</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>
            Users have the right to modify or delete their data through the user account settings.
          </p>
        </li>
        <li>
          <p>
            WorkTime reserves the right to retain certain data for analytical purposes, ensuring the
            continued improvement of the service.
          </p>
        </li>
      </List>
      <Title>Security Measures</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>
            WorkTime employs reasonable security measures to protect user data. Users are encouraged
            to adopt strong and unique passwords for added security.
          </p>
        </li>
        <li>
          <p>
            Users must not attempt to circumvent security features or engage in any activity that
            compromises the integrity of the service.
          </p>
        </li>
      </List>
      <Title>Responsible Conduct</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>Users are expected to conduct themselves responsibly within the WorkTime community.</p>
        </li>
        <li>
          <p>
            Any disruptive or abusive behavior may result in the suspension or termination of the
            user's account.
          </p>
        </li>
      </List>
      <Title>Cookie Usage</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>WorkTime uses cookies for authentication and session management purposes.</p>
        </li>
        <li>
          <p>Users can manage cookie preferences through their browser settings.</p>
        </li>
      </List>
      <Title>Policy Updates</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>
            WorkTime may update these terms periodically. Users will be notified of any significant
            changes, and continued use of the service constitutes acceptance of the updated terms.
          </p>
        </li>
      </List>
      <Title>Termination of Account</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>
            WorkTime reserves the right to terminate or suspend user accounts for violations of
            these terms or any activity deemed harmful to the community or the service.
          </p>
        </li>
      </List>
      <p>
        By using WorkTime, users agree to comply with these terms and conditions. It is recommended
        to review these terms regularly for any updates.
      </p>
    </>
  );
};

export default TermsUseSite;
