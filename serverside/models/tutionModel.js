import mongoose from 'mongoose';

const tutionSchema = mongoose.Schema({
    _id:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    basic_info:{
        reg_time:{
            member_since:{
                type: String,
                required: true
            },
            last_login:{
                type: String,
                required: true
            }
        },

        qualification:{
            type: String,
            required: true
        },
        phone:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        fb_link:{
            type: String,
            required: true
        },
        twitter_link:{
            type: String,
            required: true
        },
        linkdin_link:{
            type: String,
            required: true
        }
    },
    tution_info:{
        expected_min_salary:{
            type:Number,
            required: true
        },
        current_status_for_tution:{
            type:String,
            required: true
        },
        days_per_week:{
            type:String,
            required: true
        },
        prefferef_tutoring_style:{
            type:String,
            required: true
        },
        place_of_learning:{
            type:String,
            required: true
        },
        extra_facilities:{
            type:String,
            required: true
        },
        preffered_medium:{
            type:String,
            required: true
        },
        
        preffered_classes:{
            type:[String],
            required: true
        },
        
        preffered_subject:{
            type:[String],
            required: true
        },
        preffered_area:{
            distict:{
                type:String,
                required: true
            },
            area:{
                type:[String],
                required: true
            }
        },
        
        

    },
    educational_info:{
        ssc:{
            type:[String],
            required: true
        },
        hsc:{
            type:[String],
            required: true
        },
        honors:{
            type:[String],
            required: true
        },
        
    },
    
},{
    timestamps:true
})

const Tution = mongoose.model('Tution',tutionSchema)

export default Tution;