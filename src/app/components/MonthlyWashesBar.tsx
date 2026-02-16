import Link from "next/link"

const MonthlyWashesBar = () => {
    return (
        <div className="monthlyWashBar">
            <div className="centeredCol">
                <h3 className="pageH3"><em><strong>UNLIMITED MONTHLY WASHES</strong></em></h3>
                <p><em><strong>A Feel Good Klean for less! Starting at $23 a month.</strong></em></p>
            </div>
            <div>
               <Link href="/klean-club"> <button className="monthlyWashButton"><em>Join Now</em></button></Link>
            </div>
        </div>
    );
}
 
export default MonthlyWashesBar;