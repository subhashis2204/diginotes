import Modal from "./Modal"

function PageHeader({
  title,
  lastVisited,
  showModal,
  setShowModal,
  document,
  nextReview,
  setDocumentData,
}) {
  const handleClick = () => {
    setShowModal(true)

    console.log(document)
    console.log(nextReview)
  }

  return (
    <>
      <div className="px-2 border-b-2 flex justify-between items-center">
        <h1 className="py-2 text-2xl font-bold ">{title}</h1>
      </div>

      {showModal && (
        <Modal
          documentID={document}
          setShowModal={setShowModal}
          setDocumentData={setDocumentData}
        />
      )}
    </>
  )
}

export default PageHeader
