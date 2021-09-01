// Components
import TransparentButton from "./TransparentButton";
import RedHoverButton from "./RedHoverButton";

const SideNavbar = () => {
    function expand() {
        const smallNav = document.getElementById('smallNav');
        const bigNav = document.getElementById('bigNav');

        if (smallNav.classList.contains('flex')) {
            console.log('ssss');
        } else if (bigNav.classList.contains('flex')) {
            console.log("asdasdaw");
        }
    };

    return (
        <div>
            <nav className="flex flex-col my-5" id="smallNav" onClick={expand}>
                <TransparentButton icon="bars" size="lg" />
                <RedHoverButton icon="home" name="Home" />
                <RedHoverButton icon="compass" name="Explore" />
                <RedHoverButton icon="video" name="Subscriptions" />
                <RedHoverButton icon="book" name="Library" />
            </nav>


        </div>
    )
};

export default SideNavbar;