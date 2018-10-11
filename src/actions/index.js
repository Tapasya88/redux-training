
const selectTrainer = (trainer)=>{
    console.log("You clicked on trainer:"+trainer.id);
    return {
        type:"TRAINER_SELECTED",
        payload:trainer
    }
}
export default selectTrainer;