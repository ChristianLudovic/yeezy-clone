import Layout from "@/Layouts/Layout";

export default function Page(){
    return(
        <Layout>
            <div className="h-[calc(100vh-64px)] flex justify-center">
                <div className="max-w-2xl w-full h-full px-8 flex items-center justify-center">
                    <div className="space-y-7">
                        <div className="space-y-9">
                            <h2>ALL SALES FINAL</h2>
                            <p>All sales are final due to the low cost of goods. We do not offer returns, exchanges, or refunds. Please review your order carefully before completing your purchase.</p>
                        </div>
                        <div className="space-y-9">
                            <h2>ORDER ISSUES</h2>
                            <div className="space-y-3">
                                <p>For any issues with your order (e.g., wrong item or defective product), contact us at help@yeezy.com</p>
                                <p>Please include your order number and details of the issue.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
