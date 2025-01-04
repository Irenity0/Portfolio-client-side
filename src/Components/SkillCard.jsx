const SkillCard = ({skill}) => {
    return (
        <div className="card bg-base-200">
          <figure>
            <img
              src={skill.image}
              alt="Shoes" />
          </figure>
          <div className="p-8 space-y-3">
            <h2 className="text-3xl font-bold font-rosario text-accent">{skill.name}</h2>
            <p className="text-secondary">{skill.description}</p>
            <br />
            <span className="rounded-xl border-2 border-primary/30 px-2 py-1 text-accent font-semibold">{skill.type}</span>
          </div>
        </div>
            );
};

export default SkillCard;