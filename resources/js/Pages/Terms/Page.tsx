import NavBar from "@/Components/NavBar";
import Layout from "@/Layouts/Layout";

export default function Page(){
    return(
        <Layout>
            <div className="my-[100px] flex justify-center">
                <div className="max-w-2xl w-full  px-8 flex items-center justify-center">
                    <div className="space-y-7">
                        <div className="space-y-9">
                            <h2>Terms of service</h2>
                            <div className="space-y-6">
                                <p>Welcome to the Yeezy Inc. web site (“Yeezy”, “the Site,” “we,” “us,” or “our”).
                                    Yeezy provides this site as a service to its customers. Please read the following terms of service
                                    (“Terms”) as they govern your use of our site. By using this Site, you agree to follow and be bound by the following rule below.
                                    If you do not agree to these Terms, please do not use this Site in any way
                                </p>
                                <p>Additionally, Yeezy reserves the right to modify these Terms at any time without prior
                                    notification. Site users must agree upon and abide by these changes accordingly.
                                    Please review this page periodically for changes. Any use of our Site at any time constitutes
                                    full acceptance of our service Terms.
                                </p>
                            </div>

                        </div>
                        <div className="space-y-9">
                            <h2>DESCRIPTION OF SERVICES</h2>
                            <p>Yeezy is an online retailer of designer-quality goods offered at great values to the consumer. Membership allows customers to
                                purchase a variety of products, from accessories to essentials, exclusively offered to our members monthly.
                            </p>

                        </div>
                        <div className="space-y-9">
                            <h2>USAGE RESTRICTIONS</h2>
                            <p>All of the content that appears on the Yeezy web site, including all visuals, text, audio and video clips are
                                subject to copyright protections and /or other intellectual property rights or licenses held by Yeezy. The entire content
                                of the Yeezy web site is copyrighted as a collective work under U.S. copyright laws. Yeezy grants you a limited license to
                                access and make personal use of the content on this website. Content of the Yeezy website is intended solely for the personal,
                                noncommercial use by the users of our Site..
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
)
}
