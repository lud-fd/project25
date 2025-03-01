import { Button, Paper, Stack, Container } from '@mui/material';
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function LandingView() {
    // تعریف state برای تاریخ سفر
    const [travelDate, setTravelDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    
    // تابع برای تغییر تاریخ سفر
    const handleTravelDateChange = (event) => {
        setTravelDate(event.target.value);
    };

    // تابع برای تغییر تاریخ برگشت
    const handleReturnDateChange = (event) => {
        setReturnDate(event.target.value);
    };

    return (
        <div>
            <Stack direction="column" justifyContent="center">
                <Container maxWidth="sm">
                    <Paper elevation={6}>
                        <div>
                            <h3>Enter Search Criteria to find flights</h3>
                            <div className="inner-search-form">
                                {/* انتخاب نوع سفر */}
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="travel-type-radio-group"
                                        defaultValue="oneWay"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
                                        <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
                                    </RadioGroup>
                                </FormControl>

                                {/* فیلدهای مبدا و مقصد */}
                                <div>
                                    <Stack direction="row" spacing={0.125} alignItems="center">
                                        <TextField
                                            // onChange={(event) => handleFirstChange(event.target.value)}
                                            label="From"
                                            variant="outlined"
                                            // helperText = {firstNameError}
                                            fullWidth
                                        />
                                        <TextField
                                            // onChange={(event) => handleFirstChange(event.target.value)}
                                            label="To"
                                            variant="outlined"
                                            // helperText = {firstNameError}
                                            fullWidth
                                        />
                                    </Stack>
                                </div>
                                <br />
                                {/* فیلدهای تاریخ */}
                                <div>
                                    <Stack direction="row" spacing={0.125} alignItems="center">
                                        <TextField
                                            onChange={(event) => setTravelDate(event.target.value)}
                                            label="Date"
                                            variant="outlined"
                                            type="date"
                                            value={travelDate}
                                            // helperText = {firstNameError}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            fullWidth
                                        />
                                        <TextField
                                            onChange={(event) => setReturnDate(event.target.value)}
                                            label="Return date"
                                            variant="outlined"
                                            type="date"
                                            value={returnDate}
                                            // helperText = {firstNameError}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            fullWidth
                                        />
                                        <TextField
                                            // onChange={(event) => handleFirstNameChange(event.target.value)}
                                            label="# Travellers"
                                            variant="outlined"
                                            // helperText = {firstNameError}
                                            fullWidth
                                        />
                                    </Stack>
                                </div>
                                <br />
                                <div>
                                    {/* دکمه جستجو */}
                                    <Button size="large" variant="contained" color="success" fullWidth>
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Container>

                <div>
                    <Stack direction="column" justifyContent="center">
                        {/* قسمت پیشنهادات */}
                        <Container maxWidth="sm" sx={{ marginLeft: '10px', marginRight: '10px' }}>
                            <Paper elevation={6}>
                                <h3>Recommendation</h3>
                                {/* محتوای پیشنهادات می‌تواند اینجا قرار بگیرد */}

                                <Box
                                    sx={{
                                        width: 300,
                                        height: 300,
                                        backgroundColor: 'primary.dark',
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                />
                            </Paper>
                        </Container>
                    </Stack>
                </div>
            </Stack>
        </div>
    );
}