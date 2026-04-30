<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('attendance', 'attendance/attendance')->name('attendance');
    Route::inertia('testimonials', 'testimonials/testimonials')->name('testimonials');
    Route::inertia('todo', 'toDos/todo')->name('todo');
    Route::inertia('offerings/main', 'offerings/main')->name('offerings.main');
    Route::inertia('offerings/miscellaneous', 'offerings/miscellaneous')->name('offerings.miscellaneous');
    Route::inertia('offerings/reports', 'offerings/reports')->name('offerings.reports');
});

require __DIR__.'/settings.php';