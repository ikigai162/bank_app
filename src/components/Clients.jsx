import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          className={`${styles.flexCenter} sm:min-w-[192px] min-w-[120px] flex-1 hover:`}
          key={client.id}
        >
          <img
            src={client.logo}
            alt={client}
            className="sm:w-[192px] w-[100px] object-contain hover:bg-white ease-in-out transition-all p-3 rounded-xl cursor-pointer"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
