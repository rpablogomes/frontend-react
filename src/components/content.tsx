import React
// ,{ useState } 
from 'react'
import '../styles/App.scss'

// const token = "32076aa84dcb8091eb0e9884c2f8235943c02a4ae061304baac1a68969035fee"
//     const [pagination, setPagination] = useState(0)

//     const [Data, setData] = useState({})

    // const getData = (pagination) => {

    // }

    const data = {"data": [{ "id": 12, "user_id": 15, "title": "Abduco subiungo asper adnuo soluta deporto alioqui decet pauci deduco ullus depopulo.", "body": "Amplus bardus victoria. Attero ascit tui. Subseco fugit accommodo. Accusantium bos porro. Optio cuppedia adduco. Cur voluptas crastinus. Demonstro clarus aliqua. Spiculum theatrum quia. Cruentus denego abduco. Voluptatem autem admoveo. Ambulo torqueo traho. Tabella nihil aufero. Atavus aeneus cinis. Voluptatibus doloribus carmen. Aequus attonbitus conculco. Cubitum vetus aestas. Brevis admiratio veniam. Ducimus voluptatem natus.", "created_at": "2021-07-05T03:50:04.344+05:30", "updated_at": "2021-07-05T03:50:04.344+05:30" }, { "id": 13, "user_id": 15, "title": "Absens cimentarius subito quia degenero speculum omnis est subiungo impedit cibus qui varietas succedo sed ex non amplexus.", "body": "Omnis adaugeo commemoro. Tergiversatio tabesco paens. Desolo amissio coniecto. Collum solio incidunt. Conservo vindico cruentus. Theca verbera accipio. Amissio derideo curvus. Aggredior desipio comis. Tantillus umerus vero. Volutabrum sordeo carcer. Sit adulescens et. Conculco qui sint. Sustineo et creber. Sollicito theca amicitia. Dens uredo aggredior. Audax dolorum adultus. Deleo amet dolorem. Voluptatem cohaero curia. Tremo tempus aeneus. Aetas rerum voluptatem. Casso accendo beneficium.", "created_at": "2021-07-05T03:50:04.354+05:30", "updated_at": "2021-07-05T03:50:04.354+05:30" }, { "id": 15, "user_id": 17, "title": "Quis cruciamentum desolo timidus spero compono vero praesentium officia capitulus apostolus demonstro aro tabula sopor cribro.", "body": "Civitas ultra candidus. Strues sophismata cribro. Nihil thesaurus utrimque. Vilicus decumbo summopere. Cogito uberrime abbas. Compono animi terra. Barba alveus quasi. Avaritia aut templum. Defigo acidus in. Blanditiis vesper facilis. Cupressus versus cauda. Ambulo laborum suscipit. Sunt corrigo auris. Cupiditate possimus civis. Tantillus desolo astrum. Demens tot apto. Audentia veniam adsidue.", "created_at": "2021-07-05T03:50:04.387+05:30", "updated_at": "2021-07-05T03:50:04.387+05:30" }, { "id": 16, "user_id": 17, "title": "Carpo id vehemens comptus cras eum omnis cariosus aliquid voluptas denuo cunctatio alius virgo sint substantia.", "body": "Brevis versus argentum. Temporibus articulus tener. Contigo auditor titulus. Totam ipsa surculus. Adstringo advoco crastinus. Corona vulgo crebro. Debeo nisi et. Venio clam cupressus. Dicta tolero vigor. Amor triginta vociferor. Est temptatio est. Tutis quia eius. Traho tempora odit. Iusto vestigium optio. Amor omnis enim. Volup aut cunabula. Tenetur mollitia confero. Theologus uredo crux. Arca verus adeo. Acsi astrum cedo. Tersus supplanto voluntarius.", "created_at": "2021-07-05T03:50:04.395+05:30", "updated_at": "2021-07-05T03:50:04.395+05:30" }, { "id": 18, "user_id": 18, "title": "Verbum dedecor creptio baiulus cuppedia urbs tepesco eaque decipio atrocitas aegrus aurum demergo.", "body": "Tempus terra acer. Magnam cernuus deludo. Stabilis talis valeo. Theatrum sulum spoliatio. Delicate thesis tergo. Saepe ver quis. Pauci patria incidunt. Thema et vorago. Iusto damnatio degenero. Eos clibanus adversus. Defetiscor molestias suus. Combibo candidus desolo. Error demoror tepesco. Cado tenax canonicus. Defetiscor cerno quidem. Cauda aegrotatio pax. Vapulus clamo pecunia.", "created_at": "2021-07-05T03:50:04.420+05:30", "updated_at": "2021-07-05T03:50:04.420+05:30" }, { "id": 19, "user_id": 19, "title": "Earum voluptatem coaegresco viriliter amitto antiquus harum vero laboriosam deleniti impedit victus qui officiis.", "body": "Cibo solvo amplus. Decor debilito ea. Dicta deficio deleniti. Veniam venia suus. Utrimque acidus repellendus. Demens sortitus aperte. Terror derelinquo desidero. Corrumpo provident ad. Thesis pax vel. Cogito altus minus. Vesco ut armarium. Accendo sopor et. Coniuratio concedo substantia. Cibus amissio voluptatem. Spectaculum infit tametsi.", "created_at": "2021-07-05T03:50:04.441+05:30", "updated_at": "2021-07-05T03:50:04.441+05:30" }, { "id": 20, "user_id": 20, "title": "Veritatis aestivus voluntarius abutor denego aggero.", "body": "Stella accedo trado. Temporibus minima debitis. Paulatim aiunt non. Blandior accommodo vapulus. Consequatur stultus conatus. Dignissimos repudiandae aperte. Aperio sint consequatur. Sto depereo trans. Bonus talus vulgus. Excepturi chirographum taedium. Vox tutis demonstro. Vix degusto sed. Ullus demo strues. Valens et suffoco. Tandem nemo calco. Accusamus utor argumentum. Colo odit cito. Creta thymum molestias. Eum tendo appono. Bestia deorsum assumenda. Cena est vestrum. Allatus umerus turbo. Arto ago aperte. Sol succedo nam. Depereo voluntarius approbo. Cuius ustulo usus. Attollo demulceo tertius. Sui absum ambulo. Ipsum depulso vir.", "created_at": "2021-07-05T03:50:04.453+05:30", "updated_at": "2021-07-05T03:50:04.453+05:30" }, { "id": 21, "user_id": 20, "title": "Alioqui cibo amitto demo atrox adinventitias.", "body": "Suffoco armo conduco. Compono a conduco. Decimus cruciamentum campana. Consequatur rerum sapiente. Est catena cura. Ipsa confido aestivus. Unde ver conqueror. Ver capillus auctus. Amita adstringo tonsor. Avarus stultus causa. Quia acerbitas terga. Ante valens demum. At placeat congregatio. Umquam amplitudo aveho. Angelus tamen spiritus. Tero doloremque vespillo. Varius verbera supplanto. Calamitas angulus adsum. Curvo sopor neque. Thymum expedita vestrum. Omnis depromo thalassinus. Cimentarius quae nemo. Blanditiis nihil numquam. Socius tener stabilis.", "created_at": "2021-07-05T03:50:04.473+05:30", "updated_at": "2021-07-05T03:50:04.473+05:30" }, { "id": 22, "user_id": 21, "title": "Suadeo condico antiquus tenuis dolorem cauda eaque qui torqueo testimonium dedecor armarium amita tremo uter.", "body": "Tepesco est voluptates. Capio bibo tamdiu. Utilis textilis aedificium. Synagoga artificiose uberrime. Canis laborum peior. Turbo atrox thymum. Acerbitas avarus arcus. Utrimque adimpleo victus. Terra trucido corona. Supplanto annus triduana. Culpa thorax arbor. Spiritus vesica armo. Umbra cervus deficio. Votum numquam non. Delego adiuvo sequi. Studio capio arcus. Absque et antepono. Odit curtus cetera. Suasoria debilito doloribus. Deleniti suffoco calculus. Benigne temporibus sint. Hic charisma atqui. Sit ad fuga.", "created_at": "2021-07-05T03:50:04.492+05:30", "updated_at": "2021-07-05T03:50:04.492+05:30" }, { "id": 24, "user_id": 23, "title": "Deserunt bellum cinis qui clam censura velit confido sui tertius maiores sto crudelis assumenda.", "body": "Paulatim pauci tantum. Admoveo calcar colloco. Nulla amor iusto. Corrigo vestigium demo. Repellendus totidem degero. Tripudio vinculum adeptio. Volaticus alienus candidus. Accusator deputo itaque. Bibo conturbo assentator. Tabesco tendo ea. Atrocitas perspiciatis armarium. Molestias terga derelinquo. Bos aetas ubi. Aduro balbus celer. Verumtamen contego curriculum. Capio verecundia copia. Cotidie vetus sordeo. Terreo trepide amplitudo. Cohibeo nihil demergo. Decumbo decimus absum. Tabula pecus armo. Verus sophismata decet. Conduco certo sono. Cohibeo supplanto curvus. Aveho suffoco alioqui. Aut astrum argentum. Volaticus victoria creo. Demum adinventitias cavus.", "created_at": "2021-07-05T03:50:04.532+05:30", "updated_at": "2021-07-05T03:50:04.532+05:30" }, { "id": 25, "user_id": 100, "title": "Vitiosus culpo delego incidunt vesica.", "body": "Thermae animus victus.", "created_at": "2021-07-05T03:50:04.539+05:30", "updated_at": "2021-07-05T17:18:26.097+05:30" }, { "id": 26, "user_id": 24, "title": "Decens est patria minima clam celebrer apparatus civis turpis quo turpe fuga ut.", "body": "Qui enim ventus. Vacuus sono soluta. Barba eum consequatur. Subseco consequatur vitium. Capio harum astrum. Adfero dedico earum. Asporto demoror est. Ciminatio suscipio placeat. Numquam accipio caritas. Vociferor quia consequatur. Socius spargo demoror. Derelinquo derideo spiculum. Dolor aeger sumo. Adnuo vorax theca. Anser velum avaritia. Terminatio depraedor distinctio. Clam circumvenio artificiose. Dolore celo id. Esse magni voluptatibus. Vel creta abbas. Usque accendo alter. Voluptatem sit solio. Omnis spiritus soleo. Versus minus cenaculum. Cilicium provident appositus.", "created_at": "2021-07-05T03:50:04.555+05:30", "updated_at": "2021-07-05T03:50:04.555+05:30" }, { "id": 27, "user_id": 24, "title": "Enim adinventitias labore provident sub aeternus cauda aspernatur beatae amitto angulus illum sophismata maxime statim aestus vulariter.", "body": "Sollers articulus video. Delego conicio est. Somnus clementia iure. Sit absconditus abbas. Aestus aliqua vorax. Crudelis delego concido. Suasoria calco aeternus. Acidus vulpes quis. Denuo animi suffragium. Vinitor turpis triginta. Cohibeo sodalitas creber. Carcer textor vel. Maiores cotidie cetera. Caritas textilis argentum. Ea officia tot. Expedita tenuis vorago. Autus adhaero curia. Turpe voluptas alii. Vociferor calculus colo. Caste contabesco amet. Verecundia fuga ambitus.", "created_at": "2021-07-05T03:50:04.563+05:30", "updated_at": "2021-07-05T03:50:04.563+05:30" }, { "id": 31, "user_id": 27, "title": "Viridis tepesco adficio paulatim sum vesco est.", "body": "Vultuosus inflammatio facere. Supellex cunabula vigor. Deludo confugo adstringo. Summa validus tenuis. Aer vesper delego. Molestiae valens appono. Vulgus ustilo cito. Conscendo totam aestus. Repellendus conculco agnitio. Terebro unde laborum. Desipio demens thymbra. Eum acer curso. Succurro arceo fugiat. Supellex alienus nemo. Avarus somniculosus constans. Usus bis non. Conspergo spectaculum voluptatum. Defessus deprecator toties. Eum ut campana. Tenetur tolero ciminatio. Adipisci venia amicitia. Trucido sint cervus.", "created_at": "2021-07-05T03:50:04.617+05:30", "updated_at": "2021-07-05T03:50:04.617+05:30" }, { "id": 32, "user_id": 28, "title": "Talus candidus harum ut enim amaritudo accusator.", "body": "Laborum cupiditate eius. Ut reprehenderit voluptas. Atrocitas auditor quaerat. Crastinus contabesco perferendis. Ultio et cura. Quasi tripudio defendo. Quia appello utrimque. Atqui quidem quos. Despirmatio cometes decimus. Absorbeo combibo thorax. Antiquus dignissimos sunt. Cupiditas volutabrum ratione. Corona abstergo cohaero. Alveus desino qui. Dolor at rerum. Eum cupiditas defessus. Cresco argentum aliqua. Abbas anser nesciunt. Ulterius autem cupiditas. Clamo sublime cervus. Cum blanditiis umerus. Creber sulum adipisci. Acer considero sed. Deserunt caelestis corrumpo.", "created_at": "2021-07-05T03:50:04.630+05:30", "updated_at": "2021-07-05T03:50:04.630+05:30" }, { "id": 33, "user_id": 30, "title": "Turpe defessus vae sono avoco torqueo ad teneo averto thalassinus absconditus atavus ut creber eum urbs vehemens.", "body": "Damnatio thalassinus subnecto. Arto pectus infit. Acervus tantillus facere. Corrupti absconditus natus. Cuius succurro at. Delinquo thymum coaegresco. Textor coepi demens. Templum delectatio calcar. Summisse vesco conicio. Sed ulciscor aestus. Accipio textus cervus. Degusto triduana ut. Cupiditate argumentum valde. Vomito caput accusator. Derelinquo sperno ipsum. Varius balbus nostrum. Quae aureus ullus. Error aggredior vestrum. Demo apostolus voluptatem. Auctus patior condico. Circumvenio astrum non. Unde ascisco super. Sed sustineo umbra. Aut vilicus soluta. Ciminatio tam cito. Patruus tempus tenetur. Quia torrens sollers.", "created_at": "2021-07-05T03:50:04.659+05:30", "updated_at": "2021-07-05T03:50:04.659+05:30" }, { "id": 34, "user_id": 31, "title": "Ter aperiam coadunatio labore constans decens.", "body": "Aggredior inventore deripio. Demens absconditus adstringo. Votum temperantia dolor. Depereo aestivus suggero. Curtus suggero sint. Socius unde corrigo. Verbera capillus alienus. Cras abbas talis. Venia socius sint. Nulla degenero arceo. Calco tam voluptas. Canonicus id ascit. Cernuus comminor colligo. Video trucido terra. Infit et suppellex. Ut venia deduco. Tres arcus ipsam. Ratione et et. Abundans inventore accommodo. Carus velit modi. Dolore et est. Amoveo atque cumque.", "created_at": "2021-07-05T03:50:04.682+05:30", "updated_at": "2021-07-05T03:50:04.682+05:30" }, { "id": 35, "user_id": 32, "title": "Vesper decet viduo adicio vestigium placeat.", "body": "Cetera caelum capto. Adsidue consuasor claustrum. Subvenio vilis cresco. Adduco consectetur sperno. Cubitum cimentarius tertius. Defleo adamo communis. Odit aut alo. Balbus aperio custodia. Cilicium utpote quia. Aperte uredo talis. Demonstro adaugeo deludo. Laudantium vaco recusandae. Alo caelestis asper. Cariosus vespillo enim. Ancilla verto conitor. Quaerat officia curriculum. Tenax conitor accusantium. Sono demulceo caries. Sit tres maiores. Iste cohibeo celebrer. Officia porro tener. Traho utroque arma. Demoror admoveo illum. Talis vesper desidero.", "created_at": "2021-07-05T03:50:04.691+05:30", "updated_at": "2021-07-05T03:50:04.691+05:30" }, { "id": 36, "user_id": 33, "title": "Basium theatrum torrens armarium celo vobis hic cupio suspendo autus contigo consequatur convoco decor incidunt vulgus tres via.", "body": "Copiose maiores centum. Communis absum ater. Quibusdam facilis adulescens. Suscipit demulceo degusto. Caritas complectus concido. Currus officia una. Acervus consequuntur cernuus. Laborum contabesco aufero. Vita et concedo. Neque est acer. Sapiente solum angulus. Correptius auctor spargo. Arbustum astrum quis. Coepi allatus atavus. Tactus sumptus appono. Rerum aer amor. Tum amo theca. Arcesso ter deinde. Arbitro delicate terminatio. Praesentium totidem culpo. Defigo adeo facere. Vir abscido spiritus. Neque deprimo beneficium. Minima decens aut. Eum cernuus accusantium. Tutis aliquam tego. Alter tremo cupiditas. Vulgivagus depopulo civitas.", "created_at": "2021-07-05T03:50:04.708+05:30", "updated_at": "2021-07-05T03:50:04.708+05:30" }, { "id": 37, "user_id": 33, "title": "Iusto voluptatem vicinus sequi suffragium nobis thermae deduco thema caelum quis amaritudo molestiae decretum absorbeo.", "body": "Avarus viriliter coerceo. Qui attonbitus avaritia. Aveho adeptio defigo. Angustus vindico curo. Vicissitudo vilitas amet. Cornu ducimus adultus. Curso blandior reiciendis. Possimus umerus sapiente. Ab cui vomica. Velociter depromo vapulus. Tener complectus trado. Thymbra defluo adiuvo. Exercitationem amicitia aro. Crepusculum nemo despirmatio. Carus amo voluptas. Decumbo velit amo. Ter tenuis aeneus. Occaecati subnecto tepesco. Facere triduana caritas. Adsum odio copiose. Qui defleo valeo.", "created_at": "2021-07-05T03:50:04.721+05:30", "updated_at": "2021-07-05T03:50:04.721+05:30" }]}


const list: React.FC = () => {

    return (
        <div className="content">
            <table >
                <tr className="titleTable">
                    <th>Titulo</th>
                    <th>Conteúdo</th>
                </tr>
                {
                    data.data.map(e => {

                        return (
                            <tr className="tableItems">
                                <td>{e.title}</td>
                                <td>{e.body}</td>
                            </tr>)

                    }
                    )
                }

            </table>
            <div className="pagination">fsdfsd</div>
        </div>

    )
}

export default list
