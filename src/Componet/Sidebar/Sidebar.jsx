import "./Sidebar.css";
import img from "../../assets/img.png";
import yondashuv from "../../assets/sfdf 1.png";
import icon from "../../assets/Rectangle 157.png";
import icon1 from "../../assets/sfdf 1.png";
import icon2 from "../../assets/sfdf 1 (1).png";
import icon3 from "../../assets/sfdf 1 (2).png";
import icon4 from "../../assets/sfdf 1 (3).png";
import icon5 from "../../assets/sfdf 1 (4).png";
import icon6 from "../../assets/sfdf 1 (5).png";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="container">
          <h3 className="sidebar-title">BIZ HAQIMIZDA</h3>
          <div id="sidebar-list">
            <nav>
              <p className="sidebar-text">
                Bizning kompaniyamiz 2024 yilda Toshkentda tashkil etilgan
                bo'lib, jadal rivojlanib, dunyo bo'ylab noyob turlar va
                sayohatlar taklif etmoqda. Biz unutilmas taassurotlar yaratish
                va mijozlarimizga yangi madaniyatlar, tarixlar va tabiat
                go'zalliklarini kashf etish imkoniyatini berishdan faxrlanamiz.
              </p>
              <p className="sidebar-texts">
                Biz - o'z ishiga bag'ishlangan, yosh va dinamik mutaxassislar
                jamoasimiz. Gidlarimiz va tashkilotchilarimiz har bir sayohatni
                mijozlarning barcha istaklari va afzalliklarini hisobga olgan
                holda diqqat bilan rejalashtiradilar. Har bir sayohat haqiqiy
                sarguzashtga{" "}
                <p className='sidebar-textt'>
                  aylanishi uchun eng yaxshi yo'nalishlarni taklif qilishga
                  intilamiz. Tashkil etilganimizdan beri biz yuqori sifatli
                  xizmat va har bir sayohatchiga individual yondashuv tufayli
                  mijozlarimizning ishonchini qozondik. Yevropaga tarixiy
                  ekskursiyalar, Tailandda plyaj dam olish yoki Afrikada
                  hayajonli safari bo'ladimi, biz har doim eng qiziqarli va
                  unutilmas yo'nalishlarni taklif qilishga tayyormiz. Bizga
                  qo'shiling va dunyoni yangi nuqtai nazardan kashf eting!
                  Sizning sarguzashtingiz bu yerda boshlanadi.
                </p>
              </p>
            </nav>
            <img src={img} alt="rasm" className="sidebar-img" />
          </div>
        </div>
      </div>
      <div id="sidebar-navbar">
        <div className="container">
            <h4 className="sidebar-title">Bizning Afzalliklarimiz</h4>
              <ul className="sidebar-navbar-item">
                <li className="sidebar-item">
                    <img src={icon1} alt="rasm" />
                    <p className="sidebar-item-text">Individual yondashuv</p>
                     <img src={icon} alt="icon" className="sidebar-icon" />
                </li>
                <li className="sidebar-item">
                    <img src={icon2} alt="rasm" />
                    <p className="sidebar-item-text">Tajriba va professionallik</p>
                     <img src={icon} alt="icon" className="sidebar-icon" />
                </li>
                <li className="sidebar-item">
                    <img src={icon3} alt="rasm" />
                    <p className="sidebar-item-text">Keng yo'nalishlar tanlovi</p>
                     <img src={icon} alt="icon" className="sidebar-icon" />
                </li>
                <li className="sidebar-item">
                    <img src={icon4} alt="rasm" />
                    <p className="sidebar-item-text">Ishonchlilik va xavfsizlik</p>
                     <img src={icon} alt="icon" className="sidebar-icon" />
                </li>
                <li className="sidebar-item">
                    <img src={icon6} alt="rasm" />
                    <p className="sidebar-item-text">Raqobatbardosh narxlar</p>
                     <img src={icon} alt="icon" className="sidebar-icon" />
                </li>
                <li className="sidebar-item">
                    <img src={icon5} alt="rasm" />
                    <p className="sidebar-item-text">24/7 qo'llab-quvvatlash</p>
                     <img src={icon} alt="icon" className="sidebar-icon" />
                </li>
              </ul>
          </div>
          </div>
    </>
  );
}

export default Sidebar;
