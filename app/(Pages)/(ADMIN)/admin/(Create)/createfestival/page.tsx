import CreateFestivalForm from "../../../_Admincomponents/Create/CreateFestivalForm";

const CreateFestival = () => {
  return (
    <article className="my-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl sm:text-4xl">Create a new Festival</h1>

      {/* Form container div */}
      <div className="mb-2 flex w-11/12 max-w-lg flex-col items-center justify-center rounded-lg border-2 bg-white p-6 md:w-full">
        <CreateFestivalForm />
      </div>
    </article>
  );
};

export default CreateFestival;
