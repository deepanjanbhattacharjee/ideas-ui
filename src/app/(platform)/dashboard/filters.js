import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const filters = ()=>{
    return(
        <div className='flex flex-col'> 
            <span className='text-base text-slate-400'>Filter by notations</span>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Need Sponsors" />
                <FormControlLabel control={<Checkbox />} label="Need suggestions" />
                <FormControlLabel control={<Checkbox />} label="It's a survey" />
            </FormGroup>

            <div>
                <span className='text-base text-slate-400'>Filter by reactions</span>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ideas you have belive will work" />
                    <FormControlLabel control={<Checkbox />} label="Ideas you want to collaborate with" />
                    <FormControlLabel control={<Checkbox />} label="Ideas you want to be a sponsor" />
                </FormGroup>
            </div>
        </div>
    )
}

export default filters