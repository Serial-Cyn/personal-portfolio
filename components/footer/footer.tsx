

export default function Footer() {

    return (
        <footer className="w-screen px-6">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-full flex flex-col md:flex-row justify-between items-center md:items-start py-6">
                    <div className="flex flex-col gap-2 mb-4 md:mb-0">
                        <p>Reach out to me!</p>
                        <p>christianmamplata.neust@gmail.com</p>
                        <p>(+63) 991 617 9584</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Socials</p>
                        <div>
                            <p>LinkedIn</p>
                        </div>
                        <div>
                            <p>Twitter</p>
                        </div>
                        <div>
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>© 2025 Christian Mamplata. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}