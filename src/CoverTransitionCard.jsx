/* eslint-disable react/prop-types */
import Item from "./Item"
import Overlay from "./Overlay"
import PreviewComponent from "./Previews"


function CoverTransitionCard({ itemsData, previewsData, previewRefs }) {
    return (
        <>
            <div className="content">
                {itemsData.map((item, index) => (
                    <Item key={item.id} item={item} previewRef={previewRefs.current[index]} />
                ))}
            </div>

            <Overlay />

            <section className="previews">
                {previewsData.map((preview, index) => (
                    <PreviewComponent key={index} ref={previewRefs.current[index]} preview={preview} />
                ))}
            </section>
        </>
    )
}

export default CoverTransitionCard