export const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '24px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: '-0.48px',
        textTransform: 'none' as const,
        height: '48px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      sizeLarge: {
        height: '56px',
        padding: '16px 32px',
        fontSize: '18px',
      },
      sizeSmall: {
        height: '40px',
        padding: '8px 16px',
        fontSize: '14px',
      },
      contained: {
        '&:hover': {
          transform: 'translateY(-2px)',
        },
        '&:active': {
          transform: 'scale(0.98)',
        },
      },
      containedPrimary: {
        backgroundColor: '#242424',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#1a1a1a',
        },
      },
      containedSecondary: {
        backgroundColor: '#E2292D',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#C91F23',
        },
      },
      outlined: {
        borderWidth: '2px',
        '&:hover': {
          borderWidth: '2px',
        },
      },
    },
    defaultProps: {
      disableElevation: true,
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '16px',
          backgroundColor: '#EDEDED',
          '& fieldset': {
            borderColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: 'transparent',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#E2292D',
            borderWidth: '2px',
          },
          '& input': {
            padding: '18px 16px',
            height: '48px',
            boxSizing: 'border-box',
          },
        },
        '& .MuiInputLabel-root': {
          fontSize: '16px',
          letterSpacing: '-0.48px',
          color: '#898989',
          '&.Mui-focused': {
            color: '#E2292D',
          },
        },
      },
    },
    defaultProps: {
      variant: 'outlined' as const,
      fullWidth: true,
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '24px',
        boxShadow: 'none',
        border: '1px solid #EDEDED',
        '&:hover': {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '16px 24px',
        '&:last-child': {
          paddingBottom: '16px',
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: '24px',
      },
      elevation1: {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
      elevation2: {
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: '#EDEDED',
        '&.Mui-checked': {
          color: '#E2292D',
        },
        '& .MuiSvgIcon-root': {
          borderRadius: '50%',
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        color: '#EDEDED',
        '&.Mui-checked': {
          color: '#E2292D',
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        borderRadius: '16px',
        backgroundColor: '#EDEDED',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#E2292D',
          borderWidth: '2px',
        },
      },
      select: {
        padding: '18px 16px',
        height: '48px',
        boxSizing: 'border-box' as const,
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: '16px',
        marginTop: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        padding: '12px 16px',
        fontSize: '16px',
        letterSpacing: '-0.48px',
        '&:hover': {
          backgroundColor: '#EDEDED',
        },
        '&.Mui-selected': {
          backgroundColor: '#E2292D',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#C91F23',
          },
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: '16px',
        fontWeight: 500,
        letterSpacing: '-0.42px',
      },
      filled: {
        backgroundColor: '#EDEDED',
        '&:hover': {
          backgroundColor: '#D8D8D8',
        },
      },
      outlined: {
        borderColor: '#ABABAB',
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        width: '64px',
        height: '64px',
        fontSize: '24px',
        fontWeight: 600,
      },
      rounded: {
        borderRadius: '8px',
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: '16px',
        fontSize: '14px',
        letterSpacing: '-0.42px',
      },
      standardInfo: {
        backgroundColor: '#F5F5F5',
        color: '#636363',
        '& .MuiAlert-icon': {
          color: '#898989',
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: '24px',
        padding: '24px',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontFamily: '"Elice DX Neolli OTF", sans-serif',
        fontSize: '20px',
        fontWeight: 700,
        letterSpacing: '-0.4px',
        padding: '0 0 16px 0',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: '0',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: '16px 0 0 0',
        gap: '8px',
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        '& .MuiIconButton-root': {
          padding: '8px',
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: '8px',
        '&:hover': {
          backgroundColor: 'rgba(226, 41, 45, 0.04)',
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        letterSpacing: '-0.42px',
        marginTop: '4px',
        marginLeft: '0',
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        marginRight: 0,
      },
      label: {
        fontSize: '14px',
        letterSpacing: '-0.42px',
      },
    },
  },
};