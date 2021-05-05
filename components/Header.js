import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title} >
                <span>MSS</span> PSU
            </h1>
            {/* <p className={headerStyles.description}>ชมรมมุสลิม มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่</p> */}
        </div>
    )
}

export default Header
