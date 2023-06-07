import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../contacts";

export async function loader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
}

export default function Contact() {
    const { contact } = useLoaderData();
    return (
        <div id="contact">
            <div>
                <img
                    key={contact.avatar}
                    src={contact.avatar || null}
                />
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                </h1>

                {contact.twitter && (
                    <p>
                        <a
                            target="_blank"
                            href={`https://www.facebook.com//${contact.twitter}`}
                        >
                            {contact.twitter}
                        </a>
                    </p>
                )}
                {contact.notes && <p>{contact.notes}</p>}
                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
