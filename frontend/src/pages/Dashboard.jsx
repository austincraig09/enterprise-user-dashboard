import { useEffect, useState } from "react";

export default function Dashboard() {
  // TODO: Rename these to something more descriptive
  const [me, setMe] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMe(data))
      .catch((err) => console.error("Error fetching /me:", err));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: "1.5rem" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "1rem",
          }}
        >
          Announcements
        </h2>
        {me ? (
          <div style={{ textAlign: "center", justifyContent: "start" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sodales eleifend velit, ac venenatis leo consequat ut. Fusce
            convallis sit amet nibh ut sollicitudin. Etiam sed ultrices urna.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
            tristique neque odio, vitae hendrerit nisl ullamcorper eget. Donec
            vitae velit vel enim tristique luctus. Donec vitae consectetur eros.
            Nulla eu odio eros. Phasellus eget laoreet eros, sit amet malesuada
            mauris. Nulla rhoncus imperdiet pretium. Quisque a lobortis lorem.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nunc facilisis eros quis nisi ultricies
            ultricies. Integer id augue augue. Aliquam aliquet libero mauris,
            quis fringilla nunc rutrum eu. Quisque facilisis, tellus eu molestie
            interdum, ipsum mi tristique purus, sed rhoncus urna leo eget
            libero. Aenean rutrum leo ac quam ultricies sodales. Nulla sit amet
            magna rutrum, consectetur massa ac, scelerisque ligula. Nullam at
            laoreet justo. Nam blandit, ante ultrices tempus consequat, velit
            diam volutpat nibh, auctor viverra neque mi in velit. Mauris lacus
            est, fringilla ut nisl et, pretium feugiat neque. Suspendisse sit
            amet condimentum risus. In hac habitasse platea dictumst. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Sed sodales eget nisl tincidunt tempus. Donec ut
            placerat justo. Sed quis efficitur ligula. Vestibulum metus tortor,
            interdum ut ullamcorper ac, blandit ut turpis. Phasellus urna ante,
            pharetra nec mollis eget, eleifend vel eros. Nunc lobortis, turpis
            et sollicitudin tincidunt, lorem augue lacinia ligula, a bibendum
            magna lacus eget mi. Maecenas luctus purus a facilisis ultricies.
            Integer sodales, lectus et fringilla pretium, mauris nibh eleifend
            massa, sed ullamcorper tellus leo vestibulum sem. Pellentesque
            vehicula purus vitae maximus condimentum. Ut sit amet fermentum
            erat, vel facilisis est. Donec ut nunc odio. Quisque porttitor nec
            ante eu accumsan. Nulla sit amet ex ex. Duis iaculis elit elementum
            nunc consequat, interdum tristique ligula placerat. Aliquam
            molestie, sem sed sodales egestas, mi risus egestas velit, a varius
            justo quam et est. Cras ornare risus ut leo rutrum dignissim. Duis
            nec felis cursus, elementum enim vitae, pharetra est. Praesent
            laoreet, nisi non dignissim volutpat, neque quam scelerisque turpis,
            et mattis mauris orci sit amet erat. Fusce eget sagittis augue, sed
            consectetur elit. Pellentesque eu massa eu felis congue blandit. In
            hac habitasse platea dictumst. Aenean dignissim vehicula risus, quis
            tincidunt metus ornare ut. Donec lobortis sagittis porttitor. In a
            tortor ac dui tempor consequat. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Praesent tempor, dolor vel varius consectetur, elit nunc euismod
            nisl, non convallis tellus nunc a orci. Quisque vel nisl non felis
            molestie pulvinar. Sed nisl metus, accumsan quis mauris vitae,
            bibendum dignissim libero. Pellentesque at neque id tortor porta
            aliquam sit amet vel neque. In fringilla efficitur nibh, nec sodales
            purus iaculis non. Cras quis est risus. Nulla facilisi. Ut tempor
            sagittis arcu, sed pretium nisl pellentesque eu. Donec mattis rutrum
            ligula ut egestas. Phasellus efficitur vel quam id pellentesque.
            Maecenas vel sodales sem. Donec et nibh nibh. Morbi accumsan congue
            dolor, vitae fringilla justo consectetur vel. Donec vitae bibendum
            est. Aliquam sit amet quam vel sapien rhoncus tincidunt. Etiam
            gravida dignissim condimentum. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
            rutrum ex vitae nisl ultrices elementum. Aenean aliquet sem id
            tortor finibus, id egestas ligula gravida. Duis sit amet erat id
            magna fringilla tristique. Curabitur justo erat, interdum eu
            bibendum at, tristique ut sem. Cras sed lectus vitae purus lacinia
            cursus. Pellentesque ac scelerisque risus. Vestibulum ultrices augue
            sit amet eros vestibulum, eget pharetra nibh euismod. Integer sit
            amet mauris neque. Phasellus ac mi vel quam dapibus commodo vitae
            vehicula eros. Nam luctus rutrum augue, at consectetur tellus
            interdum non. Proin vitae elit velit. Morbi a nulla lorem. Integer
            tempor eu arcu non congue. Integer pulvinar, diam eu maximus
            eleifend, lectus dui facilisis lacus, quis ultricies lorem quam
            vitae eros. In hac habitasse platea dictumst. Quisque ac porttitor
            tellus, vitae commodo nisi. Sed vitae bibendum lorem. Quisque
            dignissim justo massa, ac ultricies lorem mattis eget. Proin
            molestie ut ipsum sit amet malesuada. Maecenas luctus auctor neque,
            non sagittis tortor iaculis vitae. Fusce et libero efficitur,
            sollicitudin dui at, venenatis mi. Vestibulum auctor nulla urna, id
            lobortis lectus volutpat porta. Nulla eget venenatis nisi, mollis
            facilisis purus. Aliquam a feugiat lorem. Duis aliquet ex vel eros
            pharetra, ut volutpat nisi malesuada. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Donec arcu leo, cursus ut justo feugiat, malesuada porttitor nisi.
            Praesent vel ultricies ex. In tempus accumsan metus id vulputate.
            Nulla eu nisi ut sem mattis tincidunt non pulvinar neque. Ut dictum
            augue eu nisl rutrum, eu mollis libero pellentesque. Nulla sagittis
            eros at ligula pellentesque, sit amet iaculis nisl consectetur.
            Aliquam id arcu eget quam gravida pellentesque ac nec mauris. Etiam
            lacinia scelerisque fringilla. Aliquam sagittis libero risus,
            convallis euismod dolor pulvinar ut. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ac
            pharetra velit. Phasellus pellentesque mi ligula, et fermentum
            tortor convallis a. Donec posuere fermentum est molestie porttitor.
            Nulla fermentum arcu in lorem varius lacinia.
          </div>
        ) : (
          <p>Loading your info...</p>
        )}
      </div>
    </div>
  );
}
