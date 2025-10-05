import axios from "axios";

export const syncAshaData = async (realm) => {
  const unsynced = realm.objects("Asha").filtered("synced == false");

  for (const asha of unsynced) {
    try {
      await axios.post("http://localhost:5000/api/asha/register", {
        name: asha.name,
        email: asha.email,
        password: asha.password,
      });

      realm.write(() => {
        asha.synced = true;
      });

      console.log(`✅ Synced ${asha.email}`);
    } catch (err) {
      console.log(`❌ Sync failed for ${asha.email}: ${err.message}`);
    }
  }
};
