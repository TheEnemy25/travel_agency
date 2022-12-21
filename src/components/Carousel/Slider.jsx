import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import { Carroussel } from "./Carousel";

export function Slider() {
    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
            )
        }
    ];
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "300vh" }}>
            <Carroussel
                cards={cards}
                height="600px"
                width="70%"
                margin="0 50"
                offset={7}
                showArrows={false}
            />
        </div>
    );
}

