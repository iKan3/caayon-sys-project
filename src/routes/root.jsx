import { Outlet, Link, useLoaderData, Form, } from "react-router-dom";
import { getContacts, createContact } from "../contacts";

export async function action() {
    const contact = await createContact();
    return { contact };
}

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}

export default function Root() {
    const { contacts } = useLoaderData();
    return (
        <>
            <div id="sidebar">
                <h1>Accessible Works</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search jobs"
                            placeholder="Search Jobs"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <Form>
                        <button type="submit">Search</button>
                    </Form>
                </div>
                <nav>
                    <Link to={"/"}>Home</Link>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <Link to={`contacts/${contact.id}`}>
                                        Profile
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                    <Link to={"/jobs"}>Jobs</Link>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
