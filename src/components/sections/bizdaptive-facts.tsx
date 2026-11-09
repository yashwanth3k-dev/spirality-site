import { BIZDAPTIVE } from "~/lib/content/bizdaptive";

export default function BizdaptiveFacts() {
  return (
    <dl className="bz-facts">
      <div>
        <dt>Company</dt>
        <dd>{BIZDAPTIVE.legalName}</dd>
      </div>
      <div>
        <dt>Address</dt>
        <dd>
          <address>
            {BIZDAPTIVE.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
        </dd>
      </div>
      <div>
        <dt>Support phone</dt>
        <dd>
          <a href={`tel:${BIZDAPTIVE.phoneTel}`}>{BIZDAPTIVE.phoneDisplay}</a>
        </dd>
      </div>
      <div>
        <dt>Support email</dt>
        <dd>
          <a href={`mailto:${BIZDAPTIVE.email}`}>{BIZDAPTIVE.email}</a>
        </dd>
      </div>
    </dl>
  );
}
